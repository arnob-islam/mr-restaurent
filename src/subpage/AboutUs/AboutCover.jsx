import React from 'react'

const AboutCover = () => {
    return (
        <section className='about_cover' style={{ background: `linear-gradient(to right, rgb(255 101 87 / 84%) 0px, rgb(255 54 124 / 42%) 100%), url(/image/aboutfood1.jpg)` }}>
            <div className="container">
                <div className="row justify-content-center align-item-center text-center text-white">
                    <div className="col-md-6 col-sm-8">
                        <div className="heading">
                            <h2 className="glob_h2">
                                order you favourite food and drinks
                                stay healty and keep healty
                            </h2>
                        </div>
                        <div className="description">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, culpa?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCover
