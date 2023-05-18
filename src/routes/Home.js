import React from 'react'
import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import HomeImg from '../assets/12.jpg'
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Navbar/>
        <Hero cName="hero" heroImg={HomeImg} 
            title="Your Journy Your Story" 
            text="Chose Your Favourite Destination"
            buttonText="Travel Plane"
            url="https://www.makemytrip.com/"
            btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  )
}

export default Home