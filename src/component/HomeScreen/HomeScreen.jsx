import React from 'react'
//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/images/logo.png'
import HeaderMenu from './menu/HeaderMenu'
import HomeMenu from './menu/HomeMenu'
import Menu from './menu/Menu'
const HomeScreen = () => {
  return (
    <main className="main" id="top">
      <div class="preloader p-0" id="preloader">
        <div class="loader d-flex flex-column align-items-center"><img src="" alt="" /></div>
      </div>
      <nav class="navbar navbar-expand navbar-light bg-light sticky-top font-weight-semi-bold fs--1 text-base shadow-sm">
        <HomeMenu />
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-200 navbar-split py-3">
        <HeaderMenu />
      </nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary font-weight-semi-bold py-0 fs--1">
        <Menu />
      </nav>
    </main>
  )
}

export default HomeScreen
