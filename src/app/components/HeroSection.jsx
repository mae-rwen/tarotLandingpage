import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="relative w-full h-80 flex flex-col items-center justify-center text-white">
        {/* Background picture */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/images/background-image.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center 50%"
            className="brightness-60"
          />
        </div>

        {/* Title */}
        <div className="relative bottom-10 z-20 text-center text-[#E1D9F2]">
          <h1 className="text-2xl md:text-4xl font-serif tracking-wide">
            FIOLETOWA WRÓŻKA
          </h1>
          <p className="mt-2 text-xs md:text-sm  tracking-widest">
            TANIEC • MEDYTACJA • TAROT
          </p>
        </div>

        {/* Avatar */}
        <div className="absolute top-45 z-10 flex items-center justify-center w-40 h-60 md:w-50 md:h-75 bg-transparent rounded-full drop-shadow-2xl">
          <Image
            src="/images/welcome-image.jpg"
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
