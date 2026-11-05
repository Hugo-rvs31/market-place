import React from "react";
import "./MainNav.scss";
import { UserRound, ShoppingBasket } from "lucide-react";

const MainNav = () => {
  return (
    <div className="main-nav">
      <h1>Market Place</h1>
      <div className="inputSearch">
        <input type="search" placeholder="Rechercher" />
      </div>
      <div className="helpAndEntreprise">
        <h3>Besoin d'aide ?</h3>
        <h3>Entreprise</h3>
      </div>
      <div className="userAndCart">
        <UserRound />
        <ShoppingBasket />
      </div>
    </div>
  );
};

export default MainNav;
