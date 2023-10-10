import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
    <div className='hero-container'>
        <video src='https://pixabay.com/cs/videos/%C5%BEena-modelka-uk%C3%A1zat-m%C3%B3da-oble%C4%8Den%C3%AD-87554/' autoPlay loop muted/>
        <h1>UPCYCLED FASHION</h1>
        <p>We give clothes a second chance. Together we are #zerowaste.</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>PLAY <i className='far fa-play-circle'> </i> </Button>

        </div>
    </div>
    </>
  )
}

export default HeroSection
