"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  loop?: boolean;
  containerClassName?: string;
  slideClassName?: string;
  showArrows?: boolean;
}

export function Carousel({ 
  children, 
  autoPlay = true, 
  loop = true, 
  containerClassName = "flex touch-pan-y -ml-4",
  slideClassName = "flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]",
  showArrows = true
}: CarouselProps) {
  // Memoize plugins so they don't recreate on every render and break Embla
  const plugins = React.useMemo(() => {
    return autoPlay ? [Autoplay({ delay: 5000, stopOnInteraction: true })] : [];
  }, [autoPlay]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop,
    dragFree: true,
    watchDrag: (emblaApi, event) => {
      // Don't drag the carousel if the user is interacting with the slider handle or container
      const target = event.target as HTMLElement;
      if (target.closest('.slider-container') || target.closest('.cursor-ew-resize')) {
        return false;
      }
      return true;
    }
  }, plugins);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group h-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className={containerClassName}>
          {children.map((child, index) => (
            <div
              className={slideClassName}
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
