import React from "react";
import scss from "./Footer.module.scss";

//const blog ["Blog","Pricing","About Us","c"]
function Footer() {
  return (
    <section className={scss.footer}>
      <div className="container">
        <section className={scss.footer_menu}>
          <article>
            <img src="/public/footer/Logo (2).svg" alt="" />
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
              <img src="/public/footer/ins.svg" alt="" />
              <img src="/public/footer/fais.svg" alt="" />
              <img src="/public/footer/twit.svg" alt="" />
            </nav>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Footer;
