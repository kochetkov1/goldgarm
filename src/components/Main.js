import React from "react";

import ProductsRollTable from "./ProductsRollTable";
import ProductsRollMiniTable from "./ProductsRollMiniTable";

import stol2 from "../images/stol2.jpg";

import icontg from "../images/icon-tg.svg";
import iconwhatsapp from "../images/icon-whatsapp.svg";
import iconviber from "../images/icon-viber.svg";

function Main() {
  return (
    <main className="content">

      <section className="about">
        <h1 className="about__title">
          GOLD GARM – это брутальная мебель в духе свободы, практичности и
          естественности.
        </h1>
        <img
          className="about__photo"
          src={stol2}
          alt="Письменный стол в стиле лофт"
        />
        <p className="about__text">
          В наших изделиях мы используем только натуральные материалы, основу
          которых составляют металл, дерево и стекло, в лучших традициях
          индустриальной эпохи середины 20-го века.
        </p>
        <p className="about__text">
          Мебель GOLD GARM - это ручной труд, выполняемый с особым трепетом и
          уважением к ценностям и философии стиля лофт. Для нас LOFT - это
          философия свободы и практичности, без «навороченных понтов» и
          бутафорного глянца! Доставляем в любой регион России.
        </p>
      </section>

      <section className="products">
        <ProductsRollTable />
        <ProductsRollMiniTable />
      </section>

      <section className="contacts">

        <p className="contacts__paragraph">Вы можете заказать изделия по индивидуальному проекту</p>
        <p className="contacts__paragraph">Cвяжитесь с нами по телефону, почте или в любом мессенджере:</p>

        <div className="contacts__container">
          <img
            className="contacts__icon"
            src={icontg}
            alt="Telegram"
          />
          <img
            className="contacts__icon"
            src={iconwhatsapp}
            alt="WhatsApp"
          />
          <img
            className="contacts__icon"
            src={iconviber}
            alt="Viber"
          />
          <div className="contacts__callbox">
            <p className="contacts__contact">+7 (906) 393-80-46</p>
            <p className="contacts__contact">goldgarm@ya.ru</p>
          </div>
        </div>

      </section>

    </main>
  );
}

export default Main;
