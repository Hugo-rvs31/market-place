import React from "react";
import "./SecondaryNav.scss";
import { ShieldCheck } from "lucide-react";

const SecondaryNav = () => {
  return (
    <div className="secondary-nav">
      <p>
        <ShieldCheck size={14} strokeWidth={2} />
        Notre Pacte Qualité
      </p>
      <p>Stop fast tech</p>
      <p>Le Mag</p>
    </div>
  );
};

export default SecondaryNav;
