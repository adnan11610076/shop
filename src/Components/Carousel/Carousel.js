import React from 'react';
import './Carousel.css';
import carousel_one from '../Assets/c-img1.png'
import carousel_two from '../Assets/c-img2.png'
import carousel_three from '../Assets/c-img3.png'
import arrow_icon from '../Assets/arrow.png'
const Carousel = () => {

    
    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight * 2.8, // Scroll to 80% of the viewport height
            behavior: 'smooth',
        });
    };

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Latest Fashion Trends</h5>
                                <p>Explore our collection of the latest fashion trends.</p>

                                <button className="hero-latest-btn" onClick={handleScrollDown}>
                                    Latest Collection
                                    <img src={arrow_icon} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 carousel-img'>
                            <img src={carousel_one} className="d-block" alt="" />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Exclusive Deals</h5>
                                <p>Discover exclusive deals on products.</p>
                                <button className="hero-latest-btn" onClick={handleScrollDown}>
                                    Latest Collection
                                    <img src={arrow_icon} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 carousel-img'>
                            <img src={carousel_two} className="d-block" alt="" />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Seasonal Must-Haves</h5>
                                <p>Shop our curated selection of seasonal  for every occasion.</p>
                                <button className="hero-latest-btn" onClick={handleScrollDown}>
                                    Latest Collection
                                    <img src={arrow_icon} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 carousel-img'>
                            <img src={carousel_three} className="d-block " alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
