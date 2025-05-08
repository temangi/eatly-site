import React from "react";
import scss from "./Header.module.scss";

const arrLink = ["Menu", "blog", "Pricing", "Contact"]

function Header() {

  const links = arrLink.map( (el,index) => <a key={index} href={`/${el.toLowerCase()}`} >{el}</a>)

  return (
    <section className={scss.header}>
      <div className="container">
        <section className={scss.header_menu}>
          <article>
            <img src="/public/header/11.svg" alt="" />
            <main>{links}</main>
          </article>
          <div className={scss.header_right}>
              <button>Login</button>
              <button>Sing Up</button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Header;
