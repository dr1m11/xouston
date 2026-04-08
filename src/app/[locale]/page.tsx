import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Metrics from "@/sections/Metrics";
import Services from "@/sections/Services";
import Approach from "@/sections/Approach";
import Tech from "@/sections/Tech";
import WhyUs from "@/sections/WhyUs";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <Hero />
      <Metrics />
      <Services />
      <Approach />
      <Tech />
      <WhyUs />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
