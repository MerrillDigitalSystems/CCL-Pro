import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function clean(value: string | undefined) {
  return value?.trim() ?? "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return value.replace(/\D/g, "").length >= 10;
}

function buildMessage(payload: Required<ContactPayload>) {
  const subject = `New estimate request: ${payload.service}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Service: ${payload.service}`,
    "",
    "Project Details:",
    payload.message,
  ].join("\n");

  const html = `
    <h2>New estimate request</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <p><strong>Service:</strong> ${payload.service}</p>
    <p><strong>Project Details:</strong></p>
    <p>${payload.message.replace(/\n/g, "<br />")}</p>
  `;

  return { subject, text, html };
}

async function sendViaResend(message: ReturnType<typeof buildMessage>, replyTo: string) {
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (!from || !apiKey) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject: message.subject,
      html: message.html,
      text: message.text,
    }),
  });

  if (!response.ok) {
    throw new Error("Resend request failed.");
  }

  return true;
}

async function sendViaSendGrid(message: ReturnType<typeof buildMessage>, replyTo: string) {
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!from || !apiKey) {
    return false;
  }

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: from },
      reply_to: { email: replyTo },
      subject: message.subject,
      content: [
        { type: "text/plain", value: message.text },
        { type: "text/html", value: message.html },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("SendGrid request failed.");
  }

  return true;
}

async function sendViaSmtp(message: ReturnType<typeof buildMessage>, replyTo: string) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return false;
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = port === 465;
  const from = process.env.CONTACT_FROM_EMAIL ?? user;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: replyTo,
    subject: message.subject,
    text: message.text,
    html: message.html,
  });

  return true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const payload = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      service: clean(body.service),
      message: clean(body.message),
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.phone ||
      !payload.service ||
      !payload.message
    ) {
      return NextResponse.json(
        { error: "Please complete every required field." },
        { status: 400 }
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!isValidPhone(payload.phone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    const message = buildMessage(payload);
    const delivered =
      (await sendViaResend(message, payload.email)) ||
      (await sendViaSendGrid(message, payload.email)) ||
      (await sendViaSmtp(message, payload.email));

    if (!delivered) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Add Resend, SendGrid, or SMTP credentials before launch.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "Unable to send your request right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
