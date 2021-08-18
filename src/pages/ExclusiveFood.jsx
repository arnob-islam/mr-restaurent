import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Tooltip from '@material-ui/core/Tooltip';

const ExclusiveFood = () => {
    return (
        <section>
            <SectionTitle small='CHEF SPECIAL FOOD' big='our exclusive food' />
            <div className="container">
                <div className="row">
                    <div className="exclusive_food_wrapper">
                        <div className="exclusive_food_body">
                            <div className="img_container">
                                <img src="/image/exclusive3.png" alt="" />
                            </div>
                            <div className="food_name">
                                <span>
                                    Sausage rolls
                                </span>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias?</p>
                            </div>
                            <div className="price_container">
                                <Tooltip title="€ 150" arrow>
                                    <span>
                                        € 150
                                    </span>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="exclusive_food_body">
                            <div className="img_container">
                                <img src="/image/exclusive1.png" alt="" />
                            </div>
                            <div className="food_name">
                                <span>
                                    sponce cokkie
                                </span>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias?</p>
                            </div>
                            <div className="price_container">
                                <Tooltip title="€ 220" arrow>
                                    <span>
                                        € 220
                                    </span>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="exclusive_food_body">
                            <div className="img_container">
                                <img src="/image/exclusive2.png" alt="" />
                            </div>
                            <div className="food_name">
                                <span>
                                    Pawbaji masala
                                </span>
                            </div>
                            <div className="description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias?</p>
                            </div>
                            <div className="price_container">
                                <Tooltip title="€ 130" arrow>
                                    <span>
                                        € 130
                                    </span>
                                </Tooltip>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExclusiveFood
