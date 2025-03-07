import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#E1D9F2] ">
      <Navbar />
      <div className="pb-20 ">
        <div className="">
          <HeroSection />
        </div>
        <div>
          <WelcomeSection />
        </div>
      </div>
    </main>
  );
}
