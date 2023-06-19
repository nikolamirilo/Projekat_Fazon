import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import React from "react";
const Partners = dynamic(() => import("@/components/Partners"), { ssr: false });
const About = dynamic(() => import("@/components/About"));
const Actions = dynamic(() => import("@/components/Actions"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home: React.FC = async () => {
  return (
    <div className="flex flex-col gap-32" id="home">
      <Navbar type="home" />
      <Hero />
      <About />
      <Actions title="Akcije Projekta Fazon" actionType="actions/public" />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
