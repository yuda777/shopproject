// import the hook and options type
'use client'
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { type StoredFile } from "@/types";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CarouselArrow from "@/components/carousel/CarouselArrow";

interface ProductImageCarouselProps {
  images: StoredFile[]
}
type Props = ProductImageCarouselProps & EmblaOptionsType;

const Carousel = ({ images, ...options }: Props) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 5000, stopOnInteraction: true }

    )
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();
  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  return (
    <>
      <div ref={emblaRef} className="relative overflow-hidden">
        <div
          className="flex touch-pan-y"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {images.map((image, index) => (
            <div className="min-w-0 h-auto flex-[0_0_100%]" key={index}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  aria-label={`Slide ${index + 1} of ${images.length}`}
                  role="group"
                  key={index}
                  aria-roledescription="slide"
                  src={image.url}
                  alt={image.name}
                  fill
                  className="w-full object-cover"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
        <CarouselArrow arah={"left"} canSlide={canScrollPrev} fnClick={scrollPrev} />
        <CarouselArrow arah={"right"} canSlide={canScrollNext} fnClick={scrollNext} />
      </div>
    </>
  );
};
export default Carousel;
