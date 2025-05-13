import React from "react";
import scss from "./Restaurants.module.scss";
import rest from "../../../public/77.svg";
import rest1 from "../../../public/rest1.svg";
import Star from "../../../public/Star.svg";

const aarRa = [
  {
    title: "Healthy",
    text: "The Chicken King",
    time: "24",
    top: 4.8,
    clas: scss.healthy,
  },
  {
    title: "Trending",
    text: "The Burger King",
    time: "24",
    top: 4.9,
    clas: scss.trending,
  },
  {
    title: "Healthy",
    text: "The Chicken King",
    time: "24",
    top: 4.8,
    clas: scss.healthy,
  },
];

function Restaurants() {
  const cards = aarRa.map(({ title, text, time, top, clas }, index) => (
    <div key={index}>
      <img src={rest} alt={rest1} />
      <main>
        <span className={clas}>{title}</span>
        <h1>{text}</h1>
        <article>
          <p>
            {time}min <img src={Star} alt="" /> {top}
          </p>

          <div className={scss.save}>
            <img src={""} alt="save" />
          </div>
        </article>
      </main>
    </div>
  ));

  return (
    <section className={scss.restaurants}>
      <div className="container">
        <section className={scss.restaurants_menu}>
          <h1 className={scss.buutT}>
            Our Top <span>Restaurants</span>
          </h1>
          <main>{cards}</main>
          <a href="$">
            View All <img src={""} alt="" />{" "}
          </a>
        </section>
      </div>
    </section>
  );
}

export default Restaurants;
