import Image from "next/image";
import Link from "next/link";

import { ClickToCallLink } from "@/components/click-to-call-link";
import { ContactForm } from "@/components/contact-form";
import { reviewPlaceholders, services, siteConfig } from "@/lib/site";

const stats = [
  { value: "6+", label: "Services Offered" },
  { value: "801", label: "Area Code Served" },
  { value: "100%", label: "Owner-Led Work" },
  { value: "Free", label: "Estimates Always" },
];

const process = [
  {
    step: "01",
    title: "Request a Quote",
    desc: "Call, text, or fill out the form below. Tell Nic about your yard, the service you need, and your preferred timeline.",
  },
  {
    step: "02",
    title: "Free On-Site Estimate",
    desc: "Nic comes out, walks the property, and gives you a clear, honest estimate — no hidden fees, no pressure.",
  },
  {
    step: "03",
    title: "We Show Up and Work",
    desc: "Your property gets the full attention of C.C.L. Pro. Owner-operated means the same person every time.",
  },
  {
    step: "04",
    title: "You Enjoy the Results",
    desc: "Clean lawn, repaired sprinklers, clear gutters. Done right the first time so you don't have to worry about it.",
  },
];

const galleryPlaceholders = [
  { location: "Provo, UT", service: "Lawn Maintenance", tag: "Before & After" },
  { location: "Orem, UT", service: "Sprinkler Repair", tag: "Irrigation System" },
  { location: "Lehi, UT", service: "Seasonal Clean-up", tag: "Fall Clean-up" },
  { location: "American Fork, UT", service: "Design & Install", tag: "Landscape Design" },
  { location: "Pleasant Grove, UT", service: "Rain Gutter Cleaning", tag: "Gutter Service" },
  { location: "Utah County, UT", service: "Tree & Bush Removal", tag: "Yard Hauling" },
];

const whyUs = [
  {
    title: "Owner on Every Job",
    desc: "Nic Walker shows up personally — not a sub-crew. You get the same reliable face on every visit.",
  },
  {
    title: "Free Honest Estimates",
    desc: "No hidden costs, no up-sell pressure. You get a straight quote before any work starts.",
  },
  {
    title: "Residential & Commercial",
    desc: "From single-family homes to rental properties and business grounds across Utah County.",
  },
  {
    title: "Fast Response Time",
    desc: "Most estimate requests get a same-day reply. Spring and fall slots fill fast — book early.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-stone-950">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="rounded-full bg-charcoal px-4 py-2 text-sm font-bold tracking-[0.25em] text-primary uppercase">
              C.C.L. Pro
            </span>
            <span className="hidden text-sm font-semibold tracking-[0.18em] text-stone-700 uppercase md:block">
              Complete Care Landscaping
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-stone-600 md:flex">
            <Link href="#services" className="transition hover:text-primary">Services</Link>
            <Link href="#process" className="transition hover:text-primary">How It Works</Link>
            <Link href="#gallery" className="transition hover:text-primary">Our Work</Link>
            <Link href="#contact" className="transition hover:text-primary">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <ClickToCallLink
              href={siteConfig.phoneHref}
              location="header"
              className="hidden text-sm font-semibold text-stone-700 transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
            >
              {siteConfig.phoneDisplay}
            </ClickToCallLink>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-charcoal hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <Image
          src="/landscaping-hero.svg"
          alt="Nic Walker landscaping crew preparing a Utah lawn and sprinkler system for seasonal service"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center opacity-60"
        />
        <div className="mx-auto grid min-h-[42rem] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Serving Utah County and the 801 area
            </p>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Utah landscaping, lawn care, and sprinkler repair done right.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
              {siteConfig.shortName} delivers reliable outdoor maintenance, clean curb appeal,
              and fast estimates for homes and commercial properties across Utah.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-stone-950 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Book Spring Clean-up
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Our Services
              </Link>
            </div>
          </div>

          <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-md">
            <div className="rounded-[1.5rem] bg-white p-6 text-stone-950">
              <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
                Free Estimate
              </p>
              <h2 className="mt-3 text-3xl font-bold">Ready for a better yard?</h2>
              <p className="mt-3 text-base leading-7 text-stone-600">
                Call {siteConfig.owner} directly or send a message below. Most requests
                get a same-day response.
              </p>
              <div className="mt-6 space-y-3">
                <ClickToCallLink
                  href={siteConfig.phoneHref}
                  location="hero"
                  className="inline-flex w-full items-center justify-center rounded-full bg-charcoal px-6 py-3 text-base font-semibold text-white transition hover:bg-primary hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
                >
                  Call {siteConfig.phoneDisplay}
                </ClickToCallLink>
                <a
                  href={siteConfig.emailHref}
                  className="inline-flex w-full items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-base font-semibold text-stone-700 transition hover:border-primary hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Email {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar — inspired by Great Valley Landscaping */}
      <div className="border-b border-stone-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-stone-100 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-4xl font-black text-primary">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="bg-section py-20" id="services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              What We Do
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
              Professional landscaping services across Utah.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              From weekly lawn care to sprinkler troubleshooting and clean seasonal resets —
              C.C.L. Pro handles every outdoor task your property needs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="rounded-3xl border-b-4 border-primary bg-white p-8 shadow-lg shadow-black/5 transition hover:-translate-y-1"
              >
                <span className="text-3xl font-black tabular-nums text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-stone-950">{service.title}</h3>
                <p className="mt-4 leading-7 text-stone-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — inspired by Chopper Landscaping */}
      <section className="py-20" id="process">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Our Process
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
              How It Works
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Simple, straightforward, and stress-free from the first call to the finished yard.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative rounded-3xl bg-section p-8">
                <span className="text-5xl font-black text-primary/20">{item.step}</span>
                <h3 className="mt-4 text-xl font-bold text-stone-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-stone-950 transition hover:bg-charcoal hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Start with a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Project gallery — inspired by Chopper Landscaping */}
      <section className="bg-charcoal py-20" id="gallery">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
                Our Work
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
                Recent Projects Across Utah
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-stone-400">
              Real project photos of Nic&apos;s work will appear here. Add before-and-after shots
              from completed jobs to build immediate trust with local homeowners.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPlaceholders.map((item) => (
              <div
                key={item.location}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-800"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs font-semibold tracking-widest text-stone-600 uppercase">
                    Add Photo Here
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                  <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-stone-950">
                    {item.tag}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white">{item.service}</p>
                  <p className="text-xs text-stone-400">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-stone-600">
            Replace placeholder tiles with real project photos — organized by city for local SEO relevance.
          </p>
        </div>
      </section>

      {/* Why Choose Us — inspired by both sites */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
                Why C.C.L. Pro
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
                We pride ourselves on quality, honesty, and showing up.
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                When you hire C.C.L. Pro, you get {siteConfig.owner} — the owner — doing
                the work. That means consistent quality, honest pricing, and a direct line
                of communication from start to finish.
              </p>
              <div className="mt-8 space-y-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[10px] font-black text-primary">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold text-stone-950">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-stone-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-stone-950 transition hover:bg-charcoal hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Get a Free Estimate
                </Link>
                <ClickToCallLink
                  href={siteConfig.phoneHref}
                  location="whyus"
                  className="inline-flex items-center justify-center rounded-full border border-stone-200 px-8 py-4 text-base font-semibold text-stone-700 transition hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Call {siteConfig.phoneDisplay}
                </ClickToCallLink>
              </div>
            </div>

            {/* Service area — inspired by Great Valley */}
            <div className="rounded-[2rem] border border-stone-100 bg-section p-8 shadow-sm">
              <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
                Areas We Serve
              </p>
              <h3 className="mt-4 text-2xl font-bold text-stone-950">
                Serving Greater Utah County & Salt Lake County
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-600">
                Based in the 801 area, C.C.L. Pro operates within a 20-mile service radius
                covering Utah&apos;s most active residential and commercial corridors.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {siteConfig.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 shadow-sm"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {area}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-charcoal p-6 text-white">
                <p className="text-sm font-semibold text-primary">Don&apos;t see your city?</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  Call {siteConfig.phoneDisplay} — Nic serves a flexible area and may be
                  able to accommodate nearby locations.
                </p>
                <ClickToCallLink
                  href={siteConfig.phoneHref}
                  location="service-area"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Call Now →
                </ClickToCallLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Customer Reviews
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
              What homeowners are saying.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              5-star Google reviews will appear here once the business profile is live and
              customers have been asked to share their experience.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {reviewPlaceholders.map((review) => (
              <article key={review.name} className="rounded-3xl bg-white p-8 shadow-lg shadow-black/5">
                <div className="mb-4 text-lg tracking-widest text-primary">★★★★★</div>
                <p className="text-lg font-bold text-stone-950">{review.name}</p>
                <p className="mt-4 leading-7 text-stone-600">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Free Estimate
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
              Let&apos;s take care of your yard.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Fill out the form or reach out directly. {siteConfig.owner} responds quickly
              with a clear, no-pressure estimate for any size project.
            </p>
            <div className="mt-8 rounded-[2rem] bg-charcoal p-8 text-white">
              <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
                Reach Out Directly
              </p>
              <div className="mt-5 space-y-4 text-lg">
                <ClickToCallLink
                  href={siteConfig.phoneHref}
                  location="contact"
                  className="block font-semibold text-white transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {siteConfig.phoneDisplay}
                </ClickToCallLink>
                <a
                  href={siteConfig.emailHref}
                  className="block text-stone-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              {siteConfig.shortName}
            </p>
            <h2 className="mt-3 text-3xl font-bold">Ready for a better backyard?</h2>
            <p className="mt-3 max-w-2xl text-stone-300">
              Contact {siteConfig.owner} for lawn maintenance, sprinkler repair, gutter cleaning,
              and seasonal yard clean-up across Utah.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <ClickToCallLink
              href={siteConfig.phoneHref}
              location="footer"
              className="block text-2xl font-bold text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {siteConfig.phoneDisplay}
            </ClickToCallLink>
            <a
              href={siteConfig.emailHref}
              className="mt-3 block text-stone-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {siteConfig.email}
            </a>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-stone-500">
              © {new Date().getFullYear()} Complete Care Landscaping Pro
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
