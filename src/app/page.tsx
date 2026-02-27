import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Capabilities from "@/components/Capabilities";
import PlatformPreview from "@/components/PlatformPreview";
import Security from "@/components/Security";
import CaseStudies from "@/components/CaseStudies";
import StrategicStatement from "@/components/StrategicStatement";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[var(--bg-primary)]">
      <div className="w-full max-w-[1440px]">
        <Navbar />
        <Hero />
        <TrustBar />
        <Capabilities />
        <PlatformPreview />
        <Security />
        <CaseStudies />
        <StrategicStatement />
        <Pricing />
        <Footer />
      </div>
    </main>
  );
}
