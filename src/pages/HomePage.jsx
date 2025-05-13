import React from 'react'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import Info from '../components/Info/Info'
import Questions from '../components/Questions/Questions'

function HomePage() {
  return (
    <>
    <Header/>
    <Main/>
    <Info/>
    <Questions/>
    <Footer/>
    </>
  )
}

export default HomePage