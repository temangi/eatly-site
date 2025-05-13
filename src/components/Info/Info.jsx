import React from "react";
import scss from "./Info.module.scss";

function Info() {
  return (
    <section className={scss.info}>
      <div className="container">
        <section className={scss.info_menu}>
          <div>
            <h1>10K+</h1>
            <span>
              Satisfied Costumers <br /> All Great Over The World{" "}
            </span>
          </div>
          <div>
            <h1>4M</h1>
            <span>
              Healthy Dishes Sold <br /> Including Milk Shakes Smooth
            </span>
          </div>
          <div>
            <h1>99.99%</h1>
            <span>
              Reliable Customer Support <br /> We Provide Great Experiences
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Info;
