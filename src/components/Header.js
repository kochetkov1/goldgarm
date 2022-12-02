import logo from "../images/header-logo.svg";
import React from "react";

import icontg from "../images/icon-tg.svg";
import iconwhatsapp from "../images/icon-whatsapp.svg";
import iconviber from "../images/icon-viber.svg";

function Header() {
  return (
    <header className="header">
      <div className="contacts__callbox contacts__callbox-header"></div>
      <img className="header__logo" src={logo} alt="GoldGarm" />

      <div className="contacts__callbox contacts__callbox-header">
        <p className="contacts__contact contacts__contact-header">
          +7 (906) 393-80-46
        </p>
        <p className="contacts__contact contacts__contact-header">
          goldgarm@ya.ru
        </p>
        <div className="header__container">
          <img className="contacts__icon contacts__icon-header" src={icontg} alt="Telegram" />
          <img className="contacts__icon contacts__icon-header" src={iconwhatsapp} alt="WhatsApp" />
          <img className="contacts__icon contacts__icon-header" src={iconviber} alt="Viber" />
        </div>
      </div>
    </header>
  );
}

export default Header;
