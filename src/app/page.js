import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";
import OfferSection from "./components/OfferSection";
import AboutMeSection from "./components/AboutMeSection";
import ReviewsSection from "./components/ReviewsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#E1D9F2] ">
      <Navbar />
      <div className=" ">
        <div className="">
          <HeroSection />
        </div>
        <div className="flex flex-col pb-20">
          <WelcomeSection />
          <OfferSection />
          <AboutMeSection />
          <ReviewsSection />
        </div>
      </div>
    </main>
  );
}
