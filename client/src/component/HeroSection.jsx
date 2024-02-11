import React from 'react'
import { Button } from './Button'
import "./HeroSection.css"


function HeroSection() {
  return (
    <div>
      <img src="../img/worfie.jpg" alt="wolf" />
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Get Started</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Watch trailer</Button>
      </div>
    </div>
  )
}

export default HeroSection
