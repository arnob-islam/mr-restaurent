import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

const SandMail = () => {
    window.open('mailto:abcdef@gmail.com')
}

const ContectUs = () => {
    return (
        <section className='section-contect border-top'>
            <div className="container">
                <div className="row justify-content-center text-center align-items-center gap-5">
                    <div className="single_content_box">
                        <div className="i_con">
                            <i className="fas fa-mobile"></i>
                        </div>

                        <div className="title">
                            <span className="global_s">
                                contectus
                            </span>
                        </div>
                        <div className="contect">
                            <span>
                                +23428877
                            </span>
                        </div>
                    </div>
                    <div className="single_content_box">
                        <div className="i_con">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="title">
                            <span className="global_s">
                                locaion
                            </span>
                        </div>
                        <div className="contect">
                            <span>
                                2700 Woodley Rd NW, Washington, DC
                            </span>
                        </div>
                    </div>
                    <div className="single_content_box">
                        <div className="i_con">
                            <i className="fas fa-globe"></i>
                        </div>
                        <div className="title">
                            <span className="global_s">
                                Events
                            </span>
                        </div>
                        <div className="contect">
                            <span>
                                Lorem ipsum dolor sit amet.
                            </span>
                        </div>
                    </div>
                    <Tooltip title="Click to send mail" enterDelay={0} arrow>
                        <div className="single_content_box sent_mail" onClick={SandMail}>
                            <div className="i_con">
                                <i className="far fa-envelope-open"></i>
                            </div>
                            <div className="title">
                                <span className="global_s">
                                    Sent mail
                                </span>
                            </div>
                            <div className="contect">
                                <span>
                                    noreplay@gmail.com
                                </span>
                            </div>
                        </div>
                    </Tooltip>

                </div>
            </div>
        </section>
    )
}

export default ContectUs