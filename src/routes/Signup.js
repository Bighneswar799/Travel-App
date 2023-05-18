import React from 'react'
import SignUpImg from '../assets/1.jpg' 
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SignUpForm from '../components/SignUpForm'

function Signup() {
  return (
    <>
        <Navbar/>
        <Hero cName="hero-mid"
            heroImg={SignUpImg} 
            title="Sign Up"
            btnClass="hide"
        />
        <SignUpForm/>
        <Footer/>
    </>
  )
}

export default Signup