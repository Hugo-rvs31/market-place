import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../sections/HeroSection/HeroSection";
import BestRefurbished from "../../sections/BestRefurbished/BestRefurbished";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <BestRefurbished />
    </div>
  );
};

export default Home;
