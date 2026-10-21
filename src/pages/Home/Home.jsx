import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../sections/HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Home;
