import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#E1D9F2] ">
      <div className=" pb-40">
        <HeroSection />
      </div>
    </main>
  );
}
