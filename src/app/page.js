import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Featured></Featured>
      <HowItWorks></HowItWorks>
    </main>
  );
}
