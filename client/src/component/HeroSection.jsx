import React from 'react'
import { Button } from './Button'
import "../styles/HeroSection.css";
import fuji from "../img/fuji.png"

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={fuji} alt="fuji" />
      <h1>Post your thoughts</h1>
      <p>Welcome</p>
    </div>
  )
}

export default HeroSection
