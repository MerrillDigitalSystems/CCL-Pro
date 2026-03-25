import Image from "next/image";
import Link from "next/link";

import { ClickToCallLink } from "@/components/click-to-call-link";
import { ContactForm } from "@/components/contact-form";
import { reviewPlaceholders, services, siteConfig } from "@/lib/site";

export const metadata = {
  title: "Utah Landscaping Services | Complete Care Landscaping — Version 2",
  robots: { index: false },
};

const SERVICE_ICONS: Record<string, string> = {
  "Lawn Maintenance": "🌿",
  "Sprinkler Repair": "💧",
  "Landscape Design & Install": "🌱",
  "Tree & Bush Removal": "🌳",
  "Rain Gutter Cleaning": "🏠",
  "Seasonal Clean-up": "🍂",
};

export default function HomeV2() {
  return (
    <main className="bg-white font-sans text-stone-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-stone-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/v2" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A4C639] text-sm font-black text-white">
              C
            </div>
            <div>
              <p className="text-sm font-black tracking-widest text-stone-900 uppercase">C.C.L. Pro</p>
              <p className="text-xs text-stone-400 tracking-wide">Complete Care Landscaping</p>
            </div>
          </Link>
          <div className="hidden gap-8 text-sm font-medium text-stone-600 md:flex">
            <Link href="#services-v2" className="transition hover:text-[#A4C639]">Services</Link>
            <Link href="#about-v2" className="transition hover:text-[#A4C639]">About</Link>
            <Link href="#contact-v2" className="transition hover:text-[#A4C639]">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <ClickToCallLink
              href={siteConfig.phoneHref}
              location="header-v2"
              className="hidden text-sm font-semibold text-stone-700 transition hover:text-[#A4C639] md:block"
            >
              {siteConfig.phoneDisplay}
            </ClickToCallLink>
            <Link
              href="#contact-v2"
              className="rounded-full bg-[#A4C639] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-stone-900 focus-visible:outline-2 focus-visible:outline-[#A4C639]"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero — centered, light */}
      <header className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white pb-24 pt-20 text-center">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #A4C639 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <span className="inline-block rounded-full border border-[#A4C639]/40 bg-[#A4C639]/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-[#7a9420] uppercase">
            Utah&apos;s Trusted Outdoor Professionals
          </span>
          <h1 className="mt-6 text-5xl font-black leading-tight tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
            Your Lawn, <br />
            <span className="text-[#A4C639]">Our Expertise.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-500">
            Professional landscaping, sprinkler repair, and seasonal clean-ups
            for residential and commercial properties across Utah. Owner-operated by {siteConfig.owner}.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact-v2"
              className="w-full rounded-full bg-[#A4C639] px-10 py-4 text-base font-bold text-white shadow-lg shadow-[#A4C639]/30 transition hover:bg-stone-900 sm:w-auto focus-visible:outline-2 focus-visible:outline-[#A4C639]"
            >
              Book Spring Clean-up
            </Link>
            <ClickToCallLink
              href={siteConfig.phoneHref}
              location="hero-v2"
              className="w-full rounded-full border-2 border-stone-200 px-10 py-4 text-base font-bold text-stone-700 transition hover:border-[#A4C639] hover:text-[#A4C639] sm:w-auto focus-visible:outline-2 focus-visible:outline-[#A4C639]"
            >
              Call {siteConfig.phoneDisplay}
            </ClickToCallLink>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 divide-x divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            {[
              { value: "6+", label: "Services Offered" },
              { value: "801", label: "Area Code Served" },
              { value: "100%", label: "Owner-Led Work" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 py-5 text-center">
                <p className="text-3xl font-black text-[#A4C639]">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold tracking-widest text-stone-400 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Hero image strip */}
      <div className="relative h-72 w-full overflow-hidden bg-stone-900 sm:h-96">
        <Image
          src="/landscaping-hero.svg"
          alt="Professional Utah landscaping and lawn maintenance crew at work"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="rounded-full border border-white/30 bg-black/40 px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
            Serving Utah County & Salt Lake County
          </p>
        </div>
      </div>

      {/* Services */}
      <section id="services-v2" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-[#A4C639] uppercase">What We Do</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-stone-900">Professional Services</h2>
            <p className="mt-4 text-lg text-stone-500">
              Everything your property needs — handled by one reliable team.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-stone-100 bg-white p-8 shadow-sm transition hover:border-[#A4C639]/50 hover:shadow-md"
              >
                <div className="mb-4 text-3xl">{SERVICE_ICONS[service.title] ?? "✅"}</div>
                <h3 className="text-lg font-bold text-stone-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about-v2" className="bg-stone-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-14">
                <p className="text-xs font-bold tracking-[0.3em] text-[#A4C639] uppercase">Why Choose C.C.L. Pro</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-stone-900">
                  Direct work from the owner, every time.
                </h2>
                <p className="mt-6 text-base leading-8 text-stone-500">
                  When you hire {siteConfig.shortName}, you get {siteConfig.owner} — not a sub-contractor or a rotating crew.
                  Every estimate, every job, every follow-up comes from the person who built this business and
                  whose reputation depends on your satisfaction.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Free estimates with no hidden costs",
                    "Serving Provo, Orem, Lehi & surrounding areas",
                    "Residential and commercial accounts welcome",
                    "Flexible seasonal scheduling",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-stone-600">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A4C639]/15 text-[10px] font-bold text-[#7a9420]">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="#contact-v2"
                    className="inline-flex items-center justify-center rounded-full bg-[#A4C639] px-7 py-3 text-sm font-bold text-white transition hover:bg-stone-900 focus-visible:outline-2 focus-visible:outline-[#A4C639]"
                  >
                    Request an Estimate
                  </Link>
                  <ClickToCallLink
                    href={siteConfig.phoneHref}
                    location="about-v2"
                    className="inline-flex items-center justify-center rounded-full border border-stone-200 px-7 py-3 text-sm font-bold text-stone-700 transition hover:border-[#A4C639] hover:text-[#A4C639] focus-visible:outline-2 focus-visible:outline-[#A4C639]"
                  >
                    {siteConfig.phoneDisplay}
                  </ClickToCallLink>
                </div>
              </div>
              <div className="bg-stone-50 p-10 lg:p-14">
                <p className="text-xs font-bold tracking-[0.3em] text-[#A4C639] uppercase">Service Areas</p>
                <h3 className="mt-4 text-2xl font-bold text-stone-900">Landscaping across Utah</h3>
                <p className="mt-3 text-sm leading-7 text-stone-500">
                  Operating throughout the 801 area including Utah County and Salt Lake County with
                  a focused 20-mile service radius.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {siteConfig.serviceAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 rounded-xl border border-stone-100 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A4C639]" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.3em] text-[#A4C639] uppercase">Reviews</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-stone-900">What Customers Say</h2>
            <p className="mt-3 text-stone-500">5-star Google reviews will appear here once the business profile is live.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviewPlaceholders.map((review) => (
              <article key={review.name} className="rounded-2xl border border-stone-100 bg-stone-50 p-8">
                <div className="mb-4 flex gap-0.5 text-[#A4C639]">{"★★★★★"}</div>
                <p className="text-sm leading-7 text-stone-600">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-4 text-xs font-bold text-stone-900">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-v2" className="bg-[#A4C639]/8 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#7a9420] uppercase">Get a Free Estimate</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-stone-900">
                Let&apos;s take care of your yard.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-500">
                Fill out the form or reach out directly. {siteConfig.owner} will get back to you
                quickly with a clear, no-pressure estimate.
              </p>
              <div className="mt-8 space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <ClickToCallLink
                  href={siteConfig.phoneHref}
                  location="contact-v2"
                  className="flex items-center gap-3 text-base font-bold text-stone-900 transition hover:text-[#A4C639] focus-visible:outline-2 focus-visible:outline-[#A4C639]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A4C639]/15 text-lg">📞</span>
                  {siteConfig.phoneDisplay}
                </ClickToCallLink>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-center gap-3 text-base font-medium text-stone-500 transition hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-[#A4C639]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-lg">✉️</span>
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A4C639] text-xs font-black text-white">C</div>
            <span className="text-sm font-bold text-stone-900">Complete Care Landscaping Pro</span>
          </div>
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} C.C.L. Pro · Utah Landscaping Services
          </p>
          <div className="flex gap-4 text-sm">
            <ClickToCallLink href={siteConfig.phoneHref} location="footer-v2" className="text-stone-500 transition hover:text-[#A4C639] focus-visible:outline-2 focus-visible:outline-[#A4C639]">
              {siteConfig.phoneDisplay}
            </ClickToCallLink>
            <a href={siteConfig.emailHref} className="text-stone-500 transition hover:text-[#A4C639] focus-visible:outline-2 focus-visible:outline-[#A4C639]">{siteConfig.email}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
