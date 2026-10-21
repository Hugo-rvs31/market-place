import React from "react";
import "./TopBar.scss";
import { Info } from "lucide-react";

const TopBar = () => {
  return (
    <div className="top-bar">
      <button className="info-button" aria-label="Plus d'informations">
        <Info size={18} strokeWidth={2.5} />
      </button>
      <p className="first-sentence">
        Le prix de reprise des PS5 est au plus haut.
      </p>
      <p className="second-sentence">Revendez la vôtre.</p>
    </div>
  );
};

export default TopBar;
