import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="relative w-full h-150 md:h-200 flex flex-col items-center justify-center">
        {/* Background picture */}
        <div className="absolute inset-0 w-full h-100 overflow-hidden ">
          <Image
            src="/images/background-image.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center 50%"
            className="brightness-50"
          />
        </div>

        {/* Title */}
        <div className="relative bottom-30 md:bottom-55 lg:bottom-60 z-20 text-center font-serif text-[#E1D9F2]">
          <h1 className="font-garamond text-3xl md:text-5xl lg:text-6xl tracking-wide">
            FIOLETOWA WRÓŻKA
          </h1>
          <p className="mt-2 text-sm md:text-base lg:text-lg font-sans tracking-widest">
            TANIEC • MEDYTACJA • TAROT
          </p>
        </div>

        {/* Avatar */}
        <div className="absolute top-60 z-10 flex items-center justify-center w-50 h-75 md:w-90 md:h-130 bg-[#3D2E52] border-6 border-[#3D2E52] rounded-full drop-shadow-2xl">
          <Image
            src="/images/hero-image.jpg"
            alt="Avatar"
            fill
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
