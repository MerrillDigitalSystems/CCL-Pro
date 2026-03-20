import Image from "next/image";
import Link from "next/link";

import { ClickToCallLink } from "@/components/click-to-call-link";
import { ContactForm } from "@/components/contact-form";
import { reviewPlaceholders, services, siteConfig, trustPoints } from "@/lib/site";

export default function Home() {
  return (
    <main className="bg-white text-stone-950">
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
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {trustPoints.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/8 p-4 text-sm leading-6 text-stone-100 backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-md">
            <div className="rounded-[1.5rem] bg-white p-6 text-stone-950">
              <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
                Quick Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold">Ready for a better yard?</h2>
              <p className="mt-3 text-base leading-7 text-stone-600">
                Call Nic Walker for a free estimate or send a message below and get your
                property on the schedule.
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

      <section className="bg-section py-20" id="services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Professional Services
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
              Outdoor maintenance built around dependable local service.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              From weekly lawn care to sprinkler troubleshooting and clean seasonal resets,
              C.C.L. Pro helps Utah properties stay sharp and easy to manage.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border-b-4 border-primary bg-white p-8 shadow-lg shadow-black/5 transition hover:-translate-y-1"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                  {siteConfig.region}
                </p>
                <h3 className="mt-3 text-2xl font-bold text-stone-950">{service.title}</h3>
                <p className="mt-4 leading-7 text-stone-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[2rem] bg-charcoal p-8 text-white">
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Why Homeowners Call
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Direct communication, clean work, and dependable follow-through.
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              This first version of the site is designed to convert quickly on mobile, highlight
              local trust, and make it easy to add before-and-after project photos as the brand
              grows online.
            </p>
            <ul className="mt-8 space-y-4 text-base text-stone-200">
              <li>Free estimates with a fast call-to-action for local search traffic.</li>
              <li>Simple, scannable sections that answer what services are offered.</li>
              <li>Built-in SEO structure for Utah landscaping and 801-area intent.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl shadow-black/5">
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Service Area
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
              Landscaping support across key Utah communities.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Start with a focused service radius and expand this section into dedicated city
              pages once photos, reviews, and localized copy are ready.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {siteConfig.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-700"
                >
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl bg-section p-6">
              <h3 className="text-xl font-bold text-stone-950">Google Business Profile Prep</h3>
              <p className="mt-3 leading-7 text-stone-600">
                Add real photos of Nic, equipment, and completed jobs. Use the categories
                Landscaper, Lawn Care Service, Sprinkler Repair Service, and Gutter Cleaning
                Service with a clear 20-mile service radius.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
                Reviews Ready
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
                Space reserved for future 5-star Google reviews.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                The section below is ready to swap to live Google Business reviews once the
                profile is active.
              </p>
            </div>
            <p className="text-sm font-medium text-stone-500">
              Launch with placeholders, then connect real testimonials later.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviewPlaceholders.map((review) => (
              <article key={review.name} className="rounded-3xl bg-white p-8 shadow-lg shadow-black/5">
                <p className="text-lg font-bold text-stone-950">{review.name}</p>
                <p className="mt-4 leading-7 text-stone-600">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              Free Estimate
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">
              Send your project details and get on the schedule.
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              This form is ready for Resend, SendGrid, or SMTP delivery. It also records lead
              submissions and click-to-call activity when a GA4 ID is added.
            </p>
            <div className="mt-8 rounded-[2rem] bg-charcoal p-8 text-white">
              <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
                Direct Contact
              </p>
              <div className="mt-5 space-y-4 text-lg">
                <ClickToCallLink
                  href={siteConfig.phoneHref}
                  location="contact"
                  className="block font-semibold text-white transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {siteConfig.phoneDisplay}
                </ClickToCallLink>
                <a href={siteConfig.emailHref} className="block text-stone-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

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
            <a href={siteConfig.emailHref} className="mt-3 block text-stone-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
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
