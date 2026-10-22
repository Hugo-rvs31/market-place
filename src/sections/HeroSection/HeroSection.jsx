import React from "react";
import "./HeroSection.scss";

import heroCenterImage from "../../assets/images/heroSection/hero-section-image.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img
        className="hero-section__center-image"
        src={heroCenterImage}
        alt=""
      />

      <div className="hero-section__content">
        <div className="hero-section-content-inner">
          <h1>Découvrez les Prix Malins</h1>
          <h5>Budget maitrisé. Qualité vérifiée. Choisis par nos experts</h5>
          <button>Acheter malin</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
