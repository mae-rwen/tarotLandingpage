import Image from "next/image";
import React from "react";

const AboutMeSection = () => {
  return (
    <section className="py-20 px-6 text-[#3D2E52]">
      <h2 className="text-3xl md:text-5xl font-serif text-center pb-8">
        O mnie
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-15">
        <div>
          <p className="mt-4 text-start text-base md:text-lg max-w-2xl ">
            Jestem Agata - w sieci znana Fioletowa Wróżka.
          </p>
          <p className="mt-4 text-start text-base md:text-lg max-w-2xl ">
            Taniec i tarot towarzyszą mi niemal od dziecka, splatając się w
            jedną ścieżkę. W jednym i drugim chodzi o to samo: o słuchanie
            siebie, o konfrontowanie się z narzucanymi schematami i o
            odnajdywanie wewnętrznej harmonii.
          </p>
          <p className="mt-4 text-start text-base md:text-lg max-w-2xl ">
            Przez lata eksplorowałam różne formy ekspresji – od mrocznego Tribal
            Fusion, przez pełne kobiecej mocy FCBD® Style, po zmysłową Burleskę.
            Taniec nauczył mnie, że ciało ma swoją mądrość i kiedy pozwolimy mu
            mówić, zaczynamy rozumieć siebie głębiej. Tarot z kolei otworzył
            przede mną przestrzeń do jeszcze większej uważności i świadomego
            kształtowania swojego życia. Karty nie są wyrocznią, a zwierciadłem
            – pomagają dostrzec to, co już w nas jest, i pokierować energię tam,
            gdzie jej naprawdę potrzebujemy.
          </p>
          <p className="mt-4 text-start text-base md:text-lg max-w-2xl ">
            Wszystko, co robię – czy to na scenie, w sali warsztatowej, czy przy
            rozkładzie kart – sprowadza się do jednego: do budzenia w ludziach
            ich własnej mocy. Wierzę, że każdy ma prawo do kreowania swojego
            życia po swojemu, poza schematami i oczekiwaniami innych. Nie uczę
            gotowych rozwiązań, nie powielam utartych ścieżek – pomagam odkryć
            własne.
          </p>
          <p className="mt-4 text-start text-base md:text-lg max-w-2xl ">
            Jeśli czujesz, że w Twoim życiu jest miejsce na więcej
            autentyczności, ruchu, magii i świadomości – jesteś we właściwym
            miejscu.
          </p>
        </div>
        <div className="flex items-center justify-center  bg-[#3D2E52] border-6 border-[#3D2E52] rounded-full drop-shadow-2xl">
          <Image
            src="/images/about-image.jpg"
            alt="Fioletowa Wróżka"
            width={400}
            height={600}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
