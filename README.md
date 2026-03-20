# CCL Pro Website

Marketing website for Complete Care Landscaping built with Next.js and Tailwind CSS.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and fill in the values you plan to use.

3. Start the dev server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

The contact form supports three delivery options in this order:

1. `RESEND_API_KEY`
2. `SENDGRID_API_KEY`
3. `SMTP_HOST` + `SMTP_PORT` + `SMTP_USER` + `SMTP_PASS`

Also configure:

- `NEXT_PUBLIC_SITE_URL` for canonical URLs, sitemap, and metadata
- `NEXT_PUBLIC_GA_ID` for Google Analytics 4 click-to-call and lead tracking
- `CONTACT_TO_EMAIL` to override the inbox receiving leads
- `CONTACT_FROM_EMAIL` for the verified sending address

## Launch Checklist

- Point the final domain to the hosting provider and set `NEXT_PUBLIC_SITE_URL`.
- Add real project photos of Nic, truck/equipment, and completed landscaping jobs.
- Replace the placeholder Google review cards with a live Google Business Profile integration once available.
- Confirm the exact Utah service cities and adjust on-page copy if the radius changes.
- Add a working email provider key or SMTP credentials before taking live submissions.
- Add the production Google Analytics 4 measurement ID to enable phone-click and form conversion tracking.
- Re-run `npm run lint` and `npm run build` before deployment.

## SEO Notes

- Metadata, JSON-LD, `robots.txt`, and `sitemap.xml` are generated through the Next.js app router.
- The homepage H1 includes `Utah` to support local search intent.
- The hero image uses descriptive alt text for accessibility and search relevance.
