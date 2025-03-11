"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    text: "Jestem zachwycona! Niebywale trafnie opisałaś mój środek, moje niepokoje, ale i te kobiece cechy, które w swobie ukryłam. Bardzo Ci dziękuję za to, jak pięknie i kobieco mi to przedstawiłaś. Niesamowicie mnie to podbudowało i naładowało energią. Jesteś wyjątkowym człowiekiem, czułym i wrażliwym. Dziękuję.",
    author: "B.",
  },
  {
    text: "Chylę czoła przed osobą, która w sposób niezwykle trafny opisała mi moją dość skomplikowaną i trudną do zinterpretowania sytuację życiową, plany, marzenia i pragnienia. Nawet moja mama zdaje się tyle nie wiedzieć o mnie, co Fioletowa Wróżka.",
    author: "A.S.",
  },
  {
    text: "Agato, ogromna więczność za ten przekaz. Jest niezwykle trafny, prawdziwy i wyczerpujący, ale przede wszystkim podnoszący na duchu.",
    author: "K.L.",
  },
  {
    text: "To przede wszystkim wspaniała osoba, potrafiąca słuchać. Z lekkością wyczytała z kart obecną sytuację. Interpretacja bez sugestii, otwierajaca umysł na rzeczy na pierwszy rzut oka wydające się nieistotne. Z czystym sumieniem polecam!",
    author: "A.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 px-6 text-[#E1D9F2] bg-[#3D2E52]">
      <h2 className="text-3xl md:text-5xl font-serif text-center pb-8">
        Opinie o pracy ze mną
      </h2>
      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="text-center">
              <p className="text-lg italic text-[#E1D9F2]">„{review.text}”</p>
              <p className="mt-4 font-semibold">{review.author}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Style dla strzałek i paginacji */}
      <style jsx global>{`
        /* Kropki paginacji */
        .swiper-pagination-bullet {
          background-color: #e1d9f2 !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background-color: #e1d9f2 !important;
          opacity: 1;
        }

        /* Przesunięcie paginacji niżej */
        .swiper-pagination {
          position: relative !important;
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
