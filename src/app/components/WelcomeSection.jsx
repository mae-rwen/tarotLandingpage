import React from "react";

const WelcomeSection = () => {
  return (
    <section className="pb-20 flex flex-col items-center text-center px-20">
      {/* Heading */}
      <h2 className=" text-3xl md:text-5xl font-serif text-[#3D2E52]">
        Odkryj ze mną swoją magię
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-base md:text-lg max-w-2xl text-[#3D2E52]">
        Jestem Agata – tancerka, mentorka duchowa i przewodniczka po świecie
        intuicji. Pomagam kobietom odnaleźć wewnętrzną moc poprzez ruch, tarot i
        medytację. Wierzę, że każda z nas może kreować swoje życie w zgodzie z
        sercem i duszą.
      </p>
    </section>
  );
};

export default WelcomeSection;
