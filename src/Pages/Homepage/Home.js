import React from 'react'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { Hero } from '../../Components/Hero'
import { Services } from '../../Components/Services'
import { Appointment } from '../../Components/Appointment'


export const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Services/>
        <Appointment/>
        {/* <Footer/> */}
    </>
  )
}
