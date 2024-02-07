import React from "react";
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_img from '../Assets/hero_image.png'

const Hero = () => {

    const handleScrollDown = () => {
        window.scrollTo({
          top: window.innerHeight * 2.8, // Scroll to 80% of the viewport height
          behavior: 'smooth',
        });
      };


    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <h2>New Arrivals Only </h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                            <img src={hand_icon} alt="" />
                        </div>
                        <p>Collection</p>
                        <p>For EveryOne</p>

                    </div>
                    <button className="hero-latest-btn" onClick={handleScrollDown}>
                        Latest Collection
                        <img src={arrow_icon} alt="" />
                    </button>
                </div>

                {/* <div className="hero-right">
                    <img src={hero_img} alt="" />
                </div> */}
            </div>
        </>
    )
}

export default Hero;