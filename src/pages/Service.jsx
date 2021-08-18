import React from 'react'
import SectionTitle from '../components/SectionTitle'
import RedeemOutlinedIcon from '@material-ui/icons/RedeemOutlined';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import RestaurantMenuOutlinedIcon from '@material-ui/icons/RestaurantMenuOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
const Service = () => {
    return (
        <section className='service_section'>
            <SectionTitle small='awsome service' big='cafa spacialities' />
            <div className="container">
                <div className="row __hojoborl">
                    <div className="singele_box_wrapper">
                        <div className="single_box">
                            <div className="svg_container">
                                <LocalBarOutlinedIcon />
                            </div>
                            <div className="single_title">
                                indivisual bar
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, quaerat.
                                </p>
                            </div>
                        </div>
                        <div className="single_box">
                            <div className="svg_container">
                                <RestaurantMenuOutlinedIcon />
                            </div>
                            <div className="single_title">
                                awsome cuisine
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, quaerat.
                                </p>
                            </div>
                        </div>
                        <div className="single_box">
                            <div className="svg_container">
                                <RestaurantOutlinedIcon />
                            </div>
                            <div className="single_title">
                                Good serveing
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, quaerat.
                                </p>
                            </div>
                        </div>
                        <div className="single_box">
                            <div className="svg_container">
                                <RedeemOutlinedIcon />
                            </div>
                            <div className="single_title">
                                more discount and offer
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, quaerat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service
