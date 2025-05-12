import React from 'react'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import Restaurants from "../components/Restaurants/Restaurants"
import Info from '../components/Info/Info'
import Page from '../components/Page/Page'

function HomePage() {
  return (
    <>
    <Header/>
    <Main/>
    <Restaurants/>
    <Info/>
    <Page/>
    <Footer/>
    </>
  )
}

export default HomePage