import React from "react";
import "./CategoryNav.scss";
import { Repeat2, Plus, ShieldCheck, Smartphone } from "lucide-react";

const CategoryNav = () => {
  return (
    <ul className="category-nav">
      <li>Black Friday</li>
      <li>Smartphones</li>
      <li>Ordinateurs portables</li>
      <li>Tablettes</li>
      <li>Conseoles</li>
      <li>Montres connectées</li>
      <li>Audio</li>
      <li>Appareils électroménagers</li>
      <li>Autres</li>
      <li>
        <div className="resell-icon">
          <Repeat2 />
          <Plus />
        </div>
        <p></p>
      </li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default CategoryNav;
