import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import Featured from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Featured></Featured>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
    </main>
  );
}