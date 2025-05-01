"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import carouselOne from "../../../public/carousel-one.png";
import carouselTwo from "../../../public/carousel-two.png";
import carouselThree from "../../../public/carousel-three.png";
import carouselFour from "../../../public/carousel-four.png";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: carouselOne, alt: "Carousel image 1" },
    { src: carouselTwo, alt: "Carousel image 2" },
    { src: carouselThree, alt: "Carousel image 3" },
    { src: carouselFour, alt: "Carousel image 4" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[550px] overflow-hidden col-span-9 row-span-12">
      {/* Text overlay */}
      <h1 className="absolute top-10 left-0 right-0 text-center text-white text-4xl lg:text-8xl font-bold z-10">
        Get Quality Products at Affordable Prices
      </h1>

      {/* Carousel images */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-gradient-to-r from-[#E67002] to-[#992002]"
                : "w-2 bg-white"
            }`}
          />
        ))}
      </div>

      {/* Shop Now button */}
      <button className="absolute bottom-40 left-1/2 transform -translate-x-1/2 px-8 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-[#E67002] to-[#992002] hover:opacity-90 transition-opacity z-10">
        Shop Now
      </button>
    </div>
  );
};

export default HeroCarousel;
