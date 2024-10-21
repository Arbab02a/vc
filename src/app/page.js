import Image from "next/image";
import ClipOne from "/src/components/ClipOne.jsx";
import Hero from "/src/components/Hero.jsx";
import OurServices from "/src/components/OurServices.jsx";
import Stats from "/src/components/Stats.jsx";
import FAQs from "/src/components/FAQs.jsx";
import TestimonialSlider from "/src/components/TestimonialSlider.jsx";
import TeamSection from "/src/components/TeamSection.jsx";

export default function Home() {
  return (
    <>
      <ClipOne />
      <Hero />
      <OurServices />
      <Stats />
      <TestimonialSlider />
      <TeamSection />
      <FAQs />
     
    </>
  );
}
