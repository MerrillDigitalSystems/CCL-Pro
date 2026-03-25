"use client";

import Link from "next/link";

import { trackEvent } from "@/lib/analytics";

type ClickToCallLinkProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href: string;
  location: string;
};

export function ClickToCallLink({
  children,
  className,
  style,
  href,
  location,
}: ClickToCallLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      style={style}
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
