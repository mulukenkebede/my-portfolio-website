import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import PricingCards from '../components/PricingCards';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="PROJECTS." text="some of the most recent works"/>
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project
