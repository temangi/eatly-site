import React from "react";
import scss from "./Main.module.scss";

const arr = [1, 2, 3, 4, 5];

function Main() {
  const stars = arr.map((el) => (
    <img key={el} src="/public/main/star.svg" alt="" />
  ));

  return (
    <section className={scss.main}>
      <div className="container">
        <section className={scss.main_menu}>
          <article>
            <p> <i> </i>OVER 1000 USERS </p>
            <h1>
              Enjoy Foods All <br /> Over The <span>World</span>
            </h1>
            <span className={scss.text}>
              EatLy help you set saving goals, earn cash back offers, Go <br />
              to disclaimer for more details and get paychecks up to two <br />
              days early. Get a <span>$20 bonus.</span>
            </span>
            <div className={scss.buttons}>
              <button className={scss.getStarted}>Get Started</button>
              <button className={scss.goPro}>Go Pro</button>
            </div>
            <aside>
              <img src="/public/main/p1.svg" alt="" />
              <h5>Trustpilot</h5>
              {stars}
              <p>4900+</p>
            </aside>
          </article>
          <article className={scss.hero}>
            <div className={scss.hero_title}>
              <aside>
                <div className={scss.label}>
                  <img src="/public/main/food.svg" alt="" />
                </div>
              <h6>Chicken Hell</h6>
              <p>On The Way</p>
               <span className={scss.time}>3:09 PM</span>
              </aside>
            </div>
            <div className={scss.img}>
             <img src="/public/main/food.1.svg" alt="Salmon Salad" />
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Main;
//git checkout - b создоют ветку
//feat/ header ;жаны нерсе
//fix/header ; озгортуу
//git add. изменения кошуу учун
//git commit  -m ; сообщение
//git push origin ;название веткис
