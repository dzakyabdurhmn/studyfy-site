import React from "react";
import Navbar from "@/section/navbar";
import Hero from "@/section/hero";
import Card from "@/section/card";
import Feature from "@/section/feature";
import Accordion from "@/section/accordion";
import Footer from "@/section/footer";
import PricingTables from "@/section/price";
import Stats from "@/section/stats";
import Docs from "./docs";
import { isProduction } from "@/lib/info";

export default function App() {
  if (isProduction) {
    return (
      <>
        <Navbar />
        <Hero />
        <Card />
        <Feature />
        <PricingTables />
        <Accordion />
        <Stats />
        <Footer />
      </>
    );
  } else {
    return <Docs />;
  }
}
