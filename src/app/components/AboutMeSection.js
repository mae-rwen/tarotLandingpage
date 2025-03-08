import Image from "next/image";
import React from "react";

const AboutMeSection = () => {
  return (
    <section className="py-20 px-6 text-[#3D2E52]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-15">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif text-center md:text-end">
            O mnie
          </h2>
          <p className="mt-4 text-start text-base md:text-lg max-w-2xl ">
            Lorem ipsum sripsum Mollit laborum veniam nulla et sunt sint velit
            occaecat fugiat id. Dolor reprehenderit enim dolor mollit proident
            Lorem proident sint. Deserunt ut ad reprehenderit amet fugiat anim
            id culpa. Anim ex veniam laboris voluptate aute nisi commodo.
            Occaecat ex do ullamco qui qui adipisicing. Magna reprehenderit sint
            sunt laboris commodo consequat culpa fugiat veniam exercitation.
            Enim culpa do labore dolor anim nulla ut.
          </p>
        </div>
        <div className="">
          <Image
            src="/images/welcome-image.jpg"
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
