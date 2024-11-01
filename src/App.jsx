import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/HERO section/Hero";
import Provide from "./components/Provide/Provide";
import Plan from "./components/Plan/Plan";
import Network from "./components/network/Network";
import SliderSlick from "./components/Slider/SliderSlick";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Provide />
      <Plan />
      <Network />
      <SliderSlick />
      <Footer />
    </>
  );
}

export default App;
