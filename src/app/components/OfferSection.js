import Image from "next/image";
import React from "react";

const OfferSection = () => {
  const offerings = [
    {
      title: "Taniec FCBD® Style i Tribal Fusion",
      image: "/images/dance-image.jpg",
    },
    {
      title: "Tarot i Portrety Psychologiczne",
      image: "/images/tarot-image.jpg",
    },
    {
      title: "Medytacja i Uważność",
      image: "/images/meditation-image.jpg",
    },
    {
      title: "Reiki i Praca z Energią",
      image: "/images/reiki-image.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#3D2E52] text-[#E1D9F2]">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-serif text-center">
        Czym się zajmuję
      </h2>
      <p className="mt-4 text-center text-base md:text-lg  mx-auto">
        Odkrywanie wewnętrznej mocy można wspierać na wiele sposobów. Moje
        narzędzia to taniec, tarot, medytacja i energia. Każda z tych ścieżek
        jest wyjątkowa, ale też uzupełniają się nawzajem.
      </p>

      {/* Offerings Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offerings.map((offer, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-40 h-60 md:w-60 md:h-80 relative rounded-t-full overflow-hidden">
              <Image
                src={offer.image}
                alt={offer.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold md:text-lg uppercase">
              {offer.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
