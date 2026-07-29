import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BatteryTypes } from "@/components/BatteryTypes";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { FastDelivery } from "@/components/FastDelivery";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <Reveal>
          <FastDelivery /> 
        </Reveal>
        
        <Reveal>
          <BatteryTypes />
        </Reveal>
        
        <Reveal>
          <Reviews />
        </Reveal>
        
        <Reveal>
          <Location />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
