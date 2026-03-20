"use client";

import { FormEvent, useMemo, useState } from "react";

import { trackEvent } from "@/lib/analytics";

type FormState = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  service: "Lawn Maintenance",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  const isDisabled = useMemo(() => status === "submitting", [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as { error?: string; success?: boolean };

    if (!response.ok || !payload.success) {
      setStatus("error");
      setFeedback(
        payload.error ??
          "Something went wrong while sending your request. Please call or email instead."
      );
      return;
    }

    trackEvent("generate_lead", {
      event_category: "engagement",
      event_label: values.service,
    });

    setStatus("success");
    setFeedback("Thanks. Your request was sent and C.C.L. Pro will follow up soon.");
    setValues(initialValues);
  }

  return (
    <form className="space-y-4 rounded-3xl bg-white p-6 shadow-xl shadow-black/5" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-stone-700">
          Name
          <input
            required
            value={values.name}
            onChange={(event) => setValues({ ...values, name: event.target.value })}
            className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-stone-700">
          Email
          <input
            required
            value={values.email}
            onChange={(event) => setValues({ ...values, email: event.target.value })}
            className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="name@example.com"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-stone-700">
          Phone
          <input
            required
            value={values.phone}
            onChange={(event) => setValues({ ...values, phone: event.target.value })}
            className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="(801) 555-1234"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-stone-700">
          Service Needed
          <select
            value={values.service}
            onChange={(event) => setValues({ ...values, service: event.target.value })}
            className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            name="service"
          >
            <option>Lawn Maintenance</option>
            <option>Sprinkler Repair</option>
            <option>Landscape Design & Install</option>
            <option>Tree & Bush Removal</option>
            <option>Rain Gutter Cleaning</option>
            <option>Seasonal Clean-up</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-stone-700">
        Project Details
        <textarea
          required
          value={values.message}
          onChange={(event) => setValues({ ...values, message: event.target.value })}
          className="min-h-36 w-full rounded-2xl border border-stone-200 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          name="message"
          placeholder="Tell us about your yard, issue, or timeline."
        />
      </label>

      <button
        type="submit"
        disabled={isDisabled}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-stone-950 transition hover:bg-stone-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request a Free Estimate"}
      </button>

      {feedback ? (
        <p
          role="alert"
          aria-live="polite"
          className={`text-sm font-medium ${status === "error" ? "text-red-600" : "text-emerald-700"}`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
