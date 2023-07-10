import './HeroImageStyles.css';

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img'
        src={IntroImg}/>
      </div>
      <div className='contenet'>
        <p>Hi, My Name is Muluken</p>
        <h1>Full stack Developer</h1>
        <div>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
