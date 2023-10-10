import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
    <div className='hero-container'>
        <h1>UPCYCLED FASHION</h1>
        <p>We give clothes a second chance</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>SEE COLLECTION</Button>
        </div>
    </div>
    </>
  )
}

export default HeroSection
