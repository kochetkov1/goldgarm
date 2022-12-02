import logo from "../images/header-logo.svg";
import React from "react";

function Header() {

  return (
    <header className="header">
      <div className="contacts__callbox contacts__callbox-header">
          </div>
      <img
        className="header__logo"
        src={logo}
        alt="GoldGarm"
      />
      <div className="contacts__callbox contacts__callbox-header">
            <p className="contacts__contact contacts__contact-header">+7 (906) 393-80-46</p>
            <p className="contacts__contact contacts__contact-header">goldgarm@ya.ru</p>
          </div>
    </header>
  );
}

export default Header;
