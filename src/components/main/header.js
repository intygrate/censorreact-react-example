import React from "react";
import Logo from "../../assets/images/censorREACT-logo.png";
import "../../assets/scss/main/header.scss";

const Header = () => (
  <header className="header">
    <img src={ Logo } alt="censorreact logo" className="header__image"/>
  </header>
);

export default Header;
