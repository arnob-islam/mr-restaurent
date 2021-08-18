import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <section className='hero_sector'>
            <OwlCarousel className='carousel_wrapper owl-theme' autoplay={true} margin={0} items={1} loop nav>
                <div className="item" style={{ background: `url(/image/slider0.jpg)` }}>
                    <div className="item_container">
                        <div className="col-md-6 col-sm-11">
                            <div className="hero_small_title">
                                <span className='__span'>
                                    healthy food
                                </span>
                            </div>
                            <div className="hero_big_title">
                                <h1>
                                    good mood breakfast
                                </h1>
                            </div>
                            <div className="hero_btn">
                                <Link to='/about/us/'>
                                    <Button variant="contained" className='global_btn'>about us</Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="item" style={{ background: `url(/image/slider1.jpg)` }}>
                    <div className="item_container">
                        <div className="col-md-6 col-sm-11">

                            <div className="hero_small_title">
                                <span className='__span'>
                                    healthy food
                                </span>
                            </div>
                            <div className="hero_big_title">
                                <h1>
                                    good mood breakfast
                                </h1>
                            </div>
                            <div className="hero_btn">
                                <Link to='/about/us/'>
                                    <Button variant="contained" className='global_btn'>about us</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="item" style={{ background: `url(/image/slider2.jpg)` }}>
                    <div className="item_container">
                        <div className="col-md-6 col-sm-11">
                            <div className="hero_small_title">
                                <span className='__span'>
                                    healthy food
                                </span>
                            </div>
                            <div className="hero_big_title">
                                <h1>
                                    good mood breakfast
                                </h1>
                            </div>
                            <div className="hero_btn">
                                <Link to='/about/us/'>
                                    <Button variant="contained" className='global_btn'>about us</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item" style={{ background: `url(/image/slider3.jpg)` }}>
                    <div className="item_container">
                        <div className="col-md-6 col-sm-11">
                            <div className="hero_small_title">
                                <span className='__span'>
                                    healthy food
                                </span>
                            </div>
                            <div className="hero_big_title">
                                <h1>
                                    good mood breakfast
                                </h1>
                            </div>
                            <div className="hero_btn">
                                <Button variant="contained" className='global_btn'>about us</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default Hero
