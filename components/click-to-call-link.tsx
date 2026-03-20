"use client";

import Link from "next/link";

import { trackEvent } from "@/lib/analytics";

type ClickToCallLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  location: string;
};

export function ClickToCallLink({
  children,
  className,
  href,
  location,
}: ClickToCallLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackEvent("click_to_call", {
          event_category: "engagement",
          event_label: location,
        })
      }
    >
      {children}
    </Link>
  );
}
