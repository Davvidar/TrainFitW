import React from 'react'
import { Outlet } from 'react-router-dom'
 import NavigationBar from '../components/NavigationBar' 
/* import HeroSection from '../components/HeroSection/HeroSection.jsx' */
import Footer from '../components/Footer'

export const Root = () => {
  return (
    <>
       <NavigationBar /> 
      {/* <HeroSection /> */}
      <br/>
      

      <Outlet />
      <Footer />
    </>
  )
}
