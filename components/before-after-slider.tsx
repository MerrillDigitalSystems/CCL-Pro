"use client";

import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  alt = "Before and after comparison",
}: BeforeAfterSliderProps) {
  return (
    <div className="slider-container relative w-full h-full overflow-hidden rounded-2xl group">
      {/* After Image (Background layer) */}
      <Image
        src={afterImage}
        alt={`${alt} - ${afterLabel}`}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* After Label */}
      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm pointer-events-none z-10">
        {afterLabel}
      </div>

      {/* Before Image (clipped via CSS custom property) */}
      <div
        className="absolute inset-0 pointer-events-none before-clip"
      >
        <Image
          src={beforeImage}
          alt={`${alt} - ${beforeLabel}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {/* Slider divider line - positioned via CSS custom property */}
      <div className="slider-line absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none" />

      {/* Slider handle - positioned via CSS custom property */}
      <div className="slider-handle absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-stone-600 z-20 pointer-events-none">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="9" y1="4" x2="9" y2="20" />
          <line x1="15" y1="4" x2="15" y2="20" />
          <polyline points="4 8 1 12 4 16" />
          <polyline points="20 8 23 12 20 16" />
        </svg>
      </div>

      {/* Native range input - this is the actual interactive element */}
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        aria-label="Slide to compare before and after"
        className="slider-range absolute inset-0 w-full h-full z-30 cursor-ew-resize"
      />

      <style jsx>{`
        .slider-container {
          --pos: 50%;
        }
        .before-clip {
          clip-path: inset(0 calc(100% - var(--pos)) 0 0);
        }
        .slider-line {
          left: var(--pos);
        }
        .slider-handle {
          left: var(--pos);
        }
        .slider-range {
          opacity: 0;
          margin: 0;
          -webkit-appearance: none;
          appearance: none;
        }
        .slider-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 2px;
          height: 100%;
          cursor: ew-resize;
        }
        .slider-range::-moz-range-thumb {
          width: 2px;
          height: 100%;
          cursor: ew-resize;
          border: none;
          background: transparent;
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var container = document.currentScript.parentElement;
              var input = container.querySelector('.slider-range');
              if (!input) return;
              input.addEventListener('input', function() {
                container.style.setProperty('--pos', this.value + '%');
              });
            })();
          `,
        }}
      />
    </div>
  );
}
