import React from "react";
import "./Header.scss";

import TopBar from "./TopBar/TopBar";
import MainNav from "./MainNav/MainNav";
import SecondaryNav from "./SecondaryNav/SecondaryNav";
import CategoryNav from "./CategoryNav/CategoryNav";

const Header = () => {
  return (
    <header className="header">
      <TopBar />
      <MainNav />
      <SecondaryNav />
      <CategoryNav />
    </header>
  );
};

export default Header;
