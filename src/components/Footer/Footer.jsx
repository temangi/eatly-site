import React from 'react'
import scss from "./Footer.module.scss"

function Footer() {
  return (
    <section className={scss.footer}>
      <div className='container'>
        <section className={scss.footer_menu}>
        </section>
      </div>
    </section>
  )
}

export default Footer