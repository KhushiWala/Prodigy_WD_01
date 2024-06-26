
//import Image from "next/image";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import About from "@/sections/About/About";
import Explore from "@/sections/explore/Explore";
import Feedback from "@/sections/feedback/Feedback";
import GetStarted from "@/sections/getStarted/GetStarted";
import Hero from "@/sections/hero/Hero";
import Insights from "@/sections/insights/Insights";
import WhatsNew from "@/sections/whatsNew/WhatsNew";
import World from "@/sections/world/World";

export default function Home() {
  return (
    <main className=" bg-black overflow-hidden ">
      <div className="lg:mx-11 xl:mx-12 2xl:mx-13">
      <Navbar />
      <Hero />

      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore/>
      </div>

      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
      </div>
    </main>
  );
}
