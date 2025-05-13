import React from "react";
import scss from "./Footer.module.scss";
import logo from "../../../public/footer/logo.svg";
import insta from "../../../public/footer/ins.svg";
import fais from "../../../public/footer/fais.svg";
import twiter from "../../../public/footer/twit.svg"


function Footer() {
  return (
    <section className={scss.footer}>
      <div className="container">
        <section className={scss.footer_menu}>
          <article>
            <img src={logo} alt="" />
            <div>
              <p>Blog</p>
              <p>Pricing</p>
              <p>About Us</p>
              <p>Contact</p>
            </div>
          </article>
          <article className={scss.footerlower}>
            <p>© 2023 EATLY All Rights Reserved.</p>
            <nav>
              <img src={insta} alt="" />
              <img src={fais} alt="" />
              <img src={twiter} alt="" />
            </nav>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Footer;
