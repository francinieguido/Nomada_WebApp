import React from 'react';
import { CardItem } from './CardItem';
import './Cards.css';

export const Cards = () => {
  return (
    <>
    <div className='cards'>
        <h1>WE MAKE FASHION SLOW AND SUSTAINABLE</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src="https://images.unsplash.com/photo-1593380090147-a2192b72a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                    text="#zerowaste Following the Kintsugi spirit, we redesign old garments and mend them with delicate embroidery."
                    label="Kintsugi for Clothing"
                    path='/services'/>

                    <CardItem 
                    src="https://images.unsplash.com/photo-1542596768-97135a93857e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    text="#zerowaste We give old garments a second chance by remodelling them into new fashionable items."
                    label="Wardrobe Revamp"
                    path='/services'/>
                </ul>

            </div>

        </div>

    </div>
    </>
  )
}

