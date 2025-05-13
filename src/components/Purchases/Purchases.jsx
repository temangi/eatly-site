import React from "react";
import scss from "./Purchases.module.scss";
import food1 from "../../../public/main/food.svg";
import food2 from "../../../public/main/food2.svg";
import food3 from "../../../public/main/food3.svg";
import money from "../../../public/main/icon1.svg";
import money1 from "../../../public/main/icon3.svg";
import Vector from "../../../public/main/Vector7.svg"

const arr = [
  {
    img: food1,
    title: "Chicken Hell",
    type: "On The Way",
    desc: "3:09 PM",
  },
  {
    img: food2,
    title: "Swe Dish",
    type: "Delivered",
    desc: "Yesterday",
  },
  {
    img: food3,
    title: "Fish Hell Veg",
    type: "Cancelled",
    desc: "Yesterday",
  },
];

const arrThis = [
  {
    img: money,
    title: "Expense",
    desc: "Increased By 10%",
    price: "$409.00",
  },
  {
    img: money1,
    title: "Vocher Usage",
    desc: "Increased By 5%",
    price: "$45.78",
  },
];

function Purchases() {
  const inputs = arr.map(({ img, title, type, desc }, index) => (
    <div key={index} className={scss.card}>
      <aside>
        <img src={img} alt="" />
        <div>
          <h3>{title}</h3>
          <p>{type}</p>
        </div>
      </aside>
      <span>{desc}</span>
    </div>
  ));
  const input = arrThis.map(({ img, title, desc, price }, index) => (
    <div key={index} className={scss.cards}>
      <article>
        <aside>
          <img src={img} alt="" />
          <div>
            <h3>{title}</h3>
            <span>{desc}</span>
          </div>
        </aside>
        <p className={scss.pull }>{price}</p>
      </article>
      <span className={scss.span}>
        <b></b>
      </span>
    </div>
  ));

  return (
    <section className={scss.Purchases}>
      <div className="container">
        <section className={scss.Purchases_menu}>
          <article>
            <h1>
              Control<span> Purchases </span>
              <br /> Via Dashboard
            </h1>
            {inputs}
          </article>
          <article className={scss.This}>
              <header>
                <h2>Purchases</h2>
                <p className={scss.pall}>This month <img src={Vector} alt="" /></p>
              </header>
              <aside className={scss.input}>{input}</aside>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Purchases;
