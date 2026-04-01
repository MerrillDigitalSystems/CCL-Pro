"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

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
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      // Prevent default to stop scrolling while dragging the slider
      if (e.cancelable) {
        e.preventDefault();
      }
      handleMove(e.touches[0].clientX);
    };
    const handleInteractionEnd = () => setIsDragging(false);

    // Attach to window to capture drags outside the element
    window.addEventListener("mousemove", handleMouseMove, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("mouseup", handleInteractionEnd);
    window.addEventListener("touchend", handleInteractionEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className="slider-container relative w-full h-full overflow-hidden rounded-2xl select-none group cursor-ew-resize touch-none"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
      }}
      onPointerMove={(e) => {
        e.stopPropagation();
      }}
    >
      {/* After Image (Background) */}
      <Image
        src={afterImage}
        alt={`${alt} - ${afterLabel}`}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* After Label */}
      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm pointer-events-none">
        {afterLabel}
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
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

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Slider Handle */}
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-stone-600 hover:scale-110 transition-transform duration-200 pointer-events-auto cursor-ew-resize">
          <GripVertical size={16} />
        </div>
      </div>
    </div>
  );
}
