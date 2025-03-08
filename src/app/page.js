import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import OfferSection from "./components/OfferSection";
import AboutMeSection from "./components/AboutMeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#E1D9F2] ">
      <Navbar />
      <div className=" ">
        <div className="">
          <HeroSection />
        </div>
        <div className="flex flex-col">
          <WelcomeSection />
          <OfferSection />
          <AboutMeSection />
        </div>
      </div>
    </main>
  );
}
