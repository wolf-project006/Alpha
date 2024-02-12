import React from 'react'
import { Button } from './Button'
import "./HeroSection.css"
import fuji from "../img/fuji.png"

function HeroSection() {
  return (
    <div>
      <img src={fuji} alt="wolf" />
      <div className="hero-btns">
      </div>
    </div>
  )
}

export default HeroSection
