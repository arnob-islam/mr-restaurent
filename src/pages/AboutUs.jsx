import React from 'react'
import Button from '@material-ui/core/Button';


const AboutUs = () => {
    return (
        <section className='about_us_sector'>
            <div className="container">
                <div className="row justify-content-center align-items-center gap-5 flex-wrap-reverse">
                    <div className="col-md-4 col-sm-10">
                        <div className="section-title">
                            <h2 className='glob_h2'>
                                welcome to Mr <br />
                                <span>
                                    CAFE & RESTAURANT
                                </span>
                            </h2>
                        </div>
                        <div className="section-style">
                            <p>
                                One should not attend even the end of the world without a good breakfast
                            </p>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil vel nulla tenetur. Incidunt consequatur.</p>
                        </div>
                        <div className="button_container">
                            <Button variant="contained" className='global_btn'>about us</Button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-10">
                        <img src={'/image/food-1.jpg'} className='img-fluid' alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
