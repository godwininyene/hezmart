"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import brand1 from "../../../public/brand1.svg";
import brand2 from "../../../public/brand2.svg";
import brand3 from "../../../public/brand3.svg";
import brand4 from "../../../public/brand4.svg";
import brand5 from "../../../public/brand5.svg";

const BrandCarousel = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5];
  const containerRef = useRef();
  const scrollerRef = useRef();

  const duplicatedBrands = [...brands, ...brands];

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;

    const totalWidth = scroller.scrollWidth / 2;

    let scrollAmount = 0;
    const speed = 1;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }
      scroller.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Our Partners</h2>
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div ref={scrollerRef} className="flex w-max gap-12 px-4">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${index}-${brand.src}`}
              className="flex items-center justify-center w-40 h-20"
            >
              <Image
                src={brand}
                alt={`Partner brand ${index + 1}`}
                width={160}
                height={80}
                className="object-contain w-full h-full hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
