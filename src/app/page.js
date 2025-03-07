import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#E1D9F2] ">
      <Navbar />
      <div className=" pb-40">
        <HeroSection />
      </div>
    </main>
  );
}
