import React from "react";
import scss from "./Adress.module.scss";
import tuu from "../../assets/get50/tuu.svg";

function Adress() {
  return (
    <section className={scss.adress}>
      <div className="container">
        <section className={scss.adress_menu}>
          <h1> GET 50%</h1>
          <div>
            <input type="text" placeholder=" Enter Your Email Address" />
            <button>subscribe</button>
          </div>

          <img className={scss.tamak} src={tuu} alt="" />
        </section>
      </div>
    </section>
  );
}

export default Adress;
