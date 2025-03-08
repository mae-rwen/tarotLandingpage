import Image from "next/image";
import React from "react";

const OfferSection = () => {
  const offerings = [
    {
      title: "Taniec FCBD® Style i Tribal Fusion",
      image: "/images/welcome-image.jpg",
    },
    {
      title: "Tarot i Portrety Psychologiczne",
      image: "/images/welcome-image.jpg",
    },
    {
      title: "Medytacja i Uważność",
      image: "/images/welcome-image.jpg",
    },
    {
      title: "Reiki i Praca z Energią",
      image: "/images/welcome-image.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#3D2E52] text-[#E1D9F2]">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-serif text-center">
        Moja oferta
      </h2>
      <p className="mt-4 text-center text-base md:text-lg max-w-2xl mx-auto">
        Oferuję wsparcie w odkrywaniu Twojej wewnętrznej mocy poprzez taniec,
        tarot, medytację i energię. Wybierz ścieżkę, która do Ciebie przemawia.
      </p>

      {/* Offerings Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offerings.map((offer, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-60 h-80 relative rounded-t-full overflow-hidden">
              <Image
                src={offer.image}
                alt={offer.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 text-base md:text-lg uppercase">
              {offer.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
