import React, { useState } from "react";
import scss from "./Questions.module.scss";
import plus from "../../../public/Plus.svg";

const arr = [
  "How long does delivery take?",
  "How Does It Work?",
  "How does your food delivery service work?",
  "What payment options do you accept?",
  "Do you offer discounts or promotions?",
];

function Questions() {
  function Card({el}) {
    const [status,setStatus] = useState(
      false
    );
    return (
      <div onClick={() => setStatus(!status)}>
        <article>
          <p>{el}</p> <img  className={status ? scss.openImg : ""} img src={plus} alt=""  />
        </article>
        <span className={status ? scss.open : ""}>
          You Can Get Information By Contacting Our Support Team Have 24/7
          Service.What’s The Difference Between Free And Paid Plan ?
        </span>
      </div>
    );
  }

  const answers = arr.map((el, index) => <Card key={index} el={el} />);
  return (
    <section className={scss.qaz}>
      <div className="container">
        <section className={scss.qaz_menu}>
          <div className={scss.qaz_title}>
            <h1>Frequently Asked</h1>
            <h1>Questions</h1>
          </div>
          <main>{answers}</main>
        </section>
      </div>
    </section>
  );
}

export default Questions;
