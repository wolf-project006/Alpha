import React, { Component } from 'react'
import "../App.css"
import Navbar from "../component/Navbar";
import HeroSection from '../component/HeroSection';
import Cards from '../component/Cards';

const Home = () => {
  return (
    <>
      <div>
        <HeroSection/>
        <Cards/>
      </div>
    </>
  );
};

export default Home;
