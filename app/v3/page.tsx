import type React from "react";

import Image from "next/image";
import Link from "next/link";

import { ClickToCallLink } from "@/components/click-to-call-link";
import { ContactForm } from "@/components/contact-form";
import { reviewPlaceholders, services, siteConfig } from "@/lib/site";

export const metadata = {
  title: "Utah Landscaping Services | Complete Care Landscaping — Version 3",
  robots: { index: false },
};

export default function HomeV3() {
  return (
    <main
      className="font-sans text-white"
      style={{ backgroundColor: "#0f1f0a", color: "#f5f0e8" }}
    >
      {/* Nav */}
      <nav
        className="sticky top-0 z-50"
        style={{ backgroundColor: "#0f1f0a", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/v3" className="flex items-center gap-4">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black"
              style={{ backgroundColor: "#A4C639", color: "#0f1f0a" }}
            >
              CCL
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.25em] uppercase" style={{ color: "#A4C639" }}>
                C.C.L. Pro
              </p>
              <p className="text-[10px] tracking-widest uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
                Complete Care Landscaping
              </p>
            </div>
          </Link>

          <div className="hidden gap-8 text-sm font-medium md:flex" style={{ color: "rgba(245,240,232,0.65)" }}>
            <Link href="#services-v3" className="transition hover:text-white">Services</Link>
            <Link href="#about-v3" className="transition hover:text-white">About</Link>
            <Link href="#contact-v3" className="transition hover:text-white">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <ClickToCallLink
              href={siteConfig.phoneHref}
              location="header-v3"
              className="hidden text-sm font-semibold transition hover:text-white md:block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ color: "#A4C639" }}
            >
              {siteConfig.phoneDisplay}
            </ClickToCallLink>
            <Link
              href="#contact-v3"
              className="rounded-full px-5 py-2.5 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: "#A4C639", color: "#0f1f0a" }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative isolate overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}>
        <Image
          src="/landscaping-hero.svg"
          alt="Nic Walker C.C.L. Pro landscaping team performing Utah lawn care and sprinkler repair"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.18 }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(135deg, #0f1f0a 0%, #1a3a0f 50%, #0f1f0a 100%)",
          }}
        />

        {/* decorative circle */}
        <div
          className="absolute -right-32 -top-32 rounded-full opacity-10 blur-3xl"
          style={{ width: 600, height: 600, backgroundColor: "#A4C639" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="max-w-5xl">
            <p
              className="mb-6 inline-block rounded-full border px-4 py-1.5 text-xs font-bold tracking-[0.3em] uppercase"
              style={{ borderColor: "rgba(164,198,57,0.35)", color: "#A4C639", backgroundColor: "rgba(164,198,57,0.08)" }}
            >
              Utah County · 801 Area · Owner-Operated
            </p>

            <h1
              className="font-black leading-none tracking-tighter"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", color: "#f5f0e8" }}
            >
              Lawn care,<br />
              <span style={{ color: "#A4C639" }}>done right.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9" style={{ color: "rgba(245,240,232,0.65)" }}>
              Professional landscaping, sprinkler repair, and seasonal clean-ups across Utah.
              Operated by {siteConfig.owner} — the person who answers when you call.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact-v3"
                className="inline-flex items-center justify-center rounded-full px-10 py-5 text-base font-black uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: "#A4C639", color: "#0f1f0a" }}
              >
                Book Spring Clean-up
              </Link>
              <Link
                href="#services-v3"
                className="inline-flex items-center justify-center rounded-full border px-10 py-5 text-base font-black uppercase tracking-wider transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ borderColor: "rgba(245,240,232,0.3)", color: "#f5f0e8" }}
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Floating info cards */}
          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Response Time", value: "Same Day", sub: "For most estimate requests" },
              { label: "Service Radius", value: "20 Miles", sub: "From base in the 801 area" },
              { label: "Properties Served", value: "Home & Business", sub: "Residential & commercial" },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(245,240,232,0.45)" }}>
                  {card.label}
                </p>
                <p className="mt-2 text-2xl font-black" style={{ color: "#A4C639" }}>{card.value}</p>
                <p className="mt-1 text-xs leading-5" style={{ color: "rgba(245,240,232,0.5)" }}>{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Services */}
      <section
        id="services-v3"
        className="py-28"
        style={{ backgroundColor: "#111d09" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#A4C639" }}>
                What We Offer
              </p>
              <h2
                className="mt-4 font-black leading-none tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#f5f0e8" }}
              >
                Professional Services
              </h2>
            </div>
            <p className="max-w-md text-base leading-8" style={{ color: "rgba(245,240,232,0.5)" }}>
              From weekly lawn maintenance to one-time deep clean-ups, C.C.L. Pro handles every
              outdoor task your property needs.
            </p>
          </div>

          <div className="grid gap-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group flex flex-col gap-3 p-8 transition lg:flex-row lg:items-start lg:gap-10"
                style={{ backgroundColor: "#111d09" }}
              >
                <span
                  className="shrink-0 text-5xl font-black leading-none tabular-nums"
                  style={{ color: "rgba(164,198,57,0.2)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-black" style={{ color: "#f5f0e8" }}>{service.title}</h3>
                  <p className="mt-2 text-sm leading-7" style={{ color: "rgba(245,240,232,0.5)" }}>
                    {service.description}
                  </p>
                </div>
                <span
                  className="ml-auto hidden shrink-0 text-xs font-bold tracking-widest uppercase opacity-0 transition group-hover:opacity-100 lg:block"
                  style={{ color: "#A4C639" }}
                >
                  Utah ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About split */}
      <section id="about-v3" className="py-28" style={{ backgroundColor: "#0f1f0a" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#A4C639" }}>
                The Owner
              </p>
              <h2
                className="mt-4 font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f5f0e8" }}
              >
                {siteConfig.owner} does the work — personally.
              </h2>
              <p className="mt-6 text-base leading-9" style={{ color: "rgba(245,240,232,0.6)" }}>
                No crews you&apos;ve never met. No phone-tree run-around. When you hire C.C.L. Pro,
                you&apos;re working directly with Nic. He estimates, he shows up, he follows through.
                That&apos;s the model — and it shows in the results.
              </p>
              <div className="mt-12 space-y-5">
                {[
                  ["Free estimates", "No cost, no pressure, clear pricing."],
                  ["Residential & commercial", "Homes, rentals, and business properties."],
                  ["Full seasonal coverage", "Spring through fall, every outdoor task."],
                  ["Google Business Profile", "5-star reviews coming as the profile launches."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-4">
                    <span
                      className="mt-1 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: "#A4C639" }}
                    />
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#f5f0e8" }}>{title}</p>
                      <p className="text-sm leading-6" style={{ color: "rgba(245,240,232,0.5)" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Service area box */}
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: "rgba(164,198,57,0.07)", border: "1px solid rgba(164,198,57,0.15)" }}
              >
                <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#A4C639" }}>
                  Service Area
                </p>
                <h3 className="mt-3 text-2xl font-black" style={{ color: "#f5f0e8" }}>
                  Landscaping across Utah
                </h3>
                <p className="mt-3 text-sm leading-7" style={{ color: "rgba(245,240,232,0.55)" }}>
                  Focused on Utah County and Salt Lake County with a 20-mile service radius.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {siteConfig.serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "rgba(245,240,232,0.65)" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#A4C639" }} />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA box */}
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: "#A4C639" }}
              >
                <h3 className="text-2xl font-black" style={{ color: "#0f1f0a" }}>
                  Ready for a better yard?
                </h3>
                <p className="mt-2 text-sm leading-7" style={{ color: "rgba(15,31,10,0.7)" }}>
                  Call Nic Walker now for a free estimate or send a message below.
                </p>
                <ClickToCallLink
                  href={siteConfig.phoneHref}
                  location="about-v3"
                  className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-black transition focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: "#0f1f0a", color: "#A4C639" }}
                >
                  {siteConfig.phoneDisplay}
                </ClickToCallLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24" style={{ backgroundColor: "#111d09" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#A4C639" }}>Customer Reviews</p>
          <h2
            className="mt-4 font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#f5f0e8" }}
          >
            5-Star Google reviews, coming soon.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviewPlaceholders.map((review) => (
              <article
                key={review.name}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="mb-4 text-base tracking-widest" style={{ color: "#A4C639" }}>★★★★★</div>
                <p className="text-sm leading-7" style={{ color: "rgba(245,240,232,0.65)" }}>
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider" style={{ color: "#A4C639" }}>
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-v3" className="py-28" style={{ backgroundColor: "#0f1f0a" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#A4C639" }}>
                Free Estimate
              </p>
              <h2
                className="mt-4 font-black leading-tight tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f5f0e8" }}
              >
                Let&apos;s get your yard back in shape.
              </h2>
              <p className="mt-6 text-base leading-9" style={{ color: "rgba(245,240,232,0.55)" }}>
                Fill out the form or call directly. Nic Walker responds quickly and gives honest,
                no-pressure estimates.
              </p>

              <div className="mt-10 space-y-5">
                <ClickToCallLink
                  href={siteConfig.phoneHref}
                  location="contact-v3"
                  className="flex items-center gap-4 text-xl font-black transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  style={{ color: "#A4C639" }}
                >
                  {siteConfig.phoneDisplay}
                </ClickToCallLink>
                <a
                  href={siteConfig.emailHref}
                  className="block text-sm transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  {siteConfig.email}
                </a>
              </div>

              <div
                className="mt-10 rounded-2xl p-6"
                style={{ backgroundColor: "rgba(164,198,57,0.07)", border: "1px solid rgba(164,198,57,0.12)" }}
              >
                <p className="text-sm font-bold" style={{ color: "#A4C639" }}>Google Business Profile</p>
                <p className="mt-2 text-xs leading-6" style={{ color: "rgba(245,240,232,0.5)" }}>
                  5-star reviews will be added here once Nic&apos;s Google Business Profile is set up.
                  To speed this up — ask your past customers to leave a review!
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10"
        style={{ backgroundColor: "#080f05", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center lg:flex-row lg:justify-between lg:text-left lg:px-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
            © {new Date().getFullYear()} Complete Care Landscaping Pro · Utah
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "rgba(245,240,232,0.3)" }}>
            <ClickToCallLink href={siteConfig.phoneHref} location="footer-v3" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-white">
              {siteConfig.phoneDisplay}
            </ClickToCallLink>
            <a href={siteConfig.emailHref} className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-white">{siteConfig.email}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
