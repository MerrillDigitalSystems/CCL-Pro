import Link from "next/link";

export const metadata = {
  title: "CCL Pro — Design Previews",
  robots: { index: false },
};

const versions = [
  {
    href: "/",
    label: "Version 1",
    name: "Modern Dark",
    description:
      "Bold charcoal hero with lime green accents. Split-screen CTA panel in the hero, sticky nav, and strong typographic contrast. Best for a tech-forward, contemporary feel.",
    palette: ["#1A1A1A", "#A4C639", "#F4F4F4", "#FFFFFF"],
    paletteLabels: ["Charcoal", "Lime Green", "Section Grey", "White"],
    tags: ["Dark hero", "Split layout", "Bold contrast"],
  },
  {
    href: "/v2",
    label: "Version 2",
    name: "Clean & Light",
    description:
      "White-first, centered layout with a subtle dot-grid background. Icon service cards, a stats bar, and a polished two-column about section. Best for a trustworthy, traditional feel.",
    palette: ["#FFFFFF", "#A4C639", "#F9FAFB", "#1C1917"],
    paletteLabels: ["White", "Lime Green", "Stone 50", "Stone 900"],
    tags: ["Light hero", "Centered layout", "Emoji icons"],
  },
  {
    href: "/v3",
    label: "Version 3",
    name: "Bold & Earthy",
    description:
      "Deep forest green background with cream text and large typographic numbers. Full-width alternating sections, oversized headline type, and floating info cards. Best for a premium, high-end feel.",
    palette: ["#0f1f0a", "#A4C639", "#111d09", "#f5f0e8"],
    paletteLabels: ["Forest Green", "Lime Green", "Dark Section", "Cream"],
    tags: ["Dark green", "Oversized type", "Premium feel"],
  },
];

export default function Preview() {
  return (
    <main className="min-h-screen bg-stone-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-stone-400 uppercase">
            Client Preview
          </div>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-white">
            C.C.L. Pro Website Designs
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-stone-400">
            Three distinct design directions for Complete Care Landscaping. Each shares the same
            content and features — only the visual style and layout differ. Click any version to
            explore it in full.
          </p>
        </div>

        {/* Version cards */}
        <div className="space-y-6">
          {versions.map((v) => (
            <div
              key={v.href}
              className="overflow-hidden rounded-3xl border border-white/8 bg-white/5 transition hover:border-white/15"
            >
              <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-start lg:gap-10">
                {/* Left */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-stone-400">
                      {v.label}
                    </span>
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-stone-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-white">{v.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-stone-400">{v.description}</p>

                  {/* Palette */}
                  <div className="mt-6 flex items-center gap-3">
                    {v.palette.map((color, i) => (
                      <div key={color} className="flex flex-col items-center gap-1.5">
                        <div
                          className="h-8 w-8 rounded-full border border-white/10 shadow"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] text-stone-600">{v.paletteLabels[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-start gap-3 lg:items-end lg:pt-2">
                  <Link
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-stone-950 transition hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Open {v.label}
                    <span className="text-stone-400">↗</span>
                  </Link>
                  <p className="text-xs text-stone-600">Opens in this tab</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-stone-700">
          All versions use the same contact form, SEO metadata, and analytics setup.
          Only the visual design changes.
        </p>
      </div>
    </main>
  );
}
