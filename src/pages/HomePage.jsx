import React from 'react'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import Purchases from "../components/Purchases/Purchases"
import Restaurants from "../components/Restaurants/Restaurants"
import Info from '../components/Info/Info'
import Questions from '../components/Questions/Questions'
import Page from '../components/Page/Page'
import Adress from '../components/Adress/Adress'

function HomePage() {
  return (
    <>
    <Header/>
    <Main/>
    <Purchases/>

    <Restaurants/>
    <Info/>
    <Questions/>
    <Page/>
    <Adress/>
    <Footer/>
    </>
  )
}

export default HomePage