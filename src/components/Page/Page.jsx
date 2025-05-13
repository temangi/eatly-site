import React from "react";
import scss from "./Page.module.scss";
import mobile from "../../../public/page/Mobile.svg";
import strelka from "../../../public/page/strelka.svg";


function Page() {
  return (
    <section className={scss.page}>
      <div className="container">
        <section className={scss.page_menu}>
          <img src={mobile} alt="" />
          <article>
            <h1>Premium <span>Quality</span> <br/>For Your Health</h1>
            <ul>
              <li>
                Premium quality food is made with ingredients that <br />
                are packed with essential vitamins, minerals.
              </li>
              <li>
                These foods promote overall wellness by support <br /> healthy
                digestion and boosting immunity
              </li>
            </ul>
            <button>
                <p>Download</p>
                <img src={strelka} alt="" />
            </button>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Page;
