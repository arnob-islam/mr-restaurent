import React from 'react'
import Button from '@material-ui/core/Button';

const ContectForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className='contect_form' style={{ background: `linear-gradient(#000000cf, #000000bf) ,url(/image/contectform.jpg)` }}>
            <div className="container">
                <div className="row justify-content-center gap-4">
                    <div className="col-md-5 col-sm-8 py-4">
                        <div className="iframe_wrapper">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6207.898609984536!2d-77.06004202365875!3d38.92513619031256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7d4dca2756d%3A0xc3c338654eed160e!2sThe%20Woodley!5e0!3m2!1sen!2sbd!4v1629218217900!5m2!1sen!2sbd" width='100%' allowFullScreen="" title="My Tracker" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-10 py-4">
                        <div className="contect-title text-white">
                            <h2 className="glob_h2">
                                enjoy our most warmfull service
                            </h2>
                        </div>
                        <form className="form_wrapper">
                            <div className="use_name">
                                <input type="text" name="" placeholder='YOUR NAME' id="name" />
                            </div>
                            <div className="emai_">
                                <input type="email" name="" placeholder='YOUR EMAIL ADDRESS' id="email" />
                            </div>
                            <div className="number">
                                <input type="tel" name="" placeholder='YOUR NUMBER' id="number" />
                            </div>
                            <div className="textarea">
                                <textarea name="" id="massage" placeholder='MASSAGE...'>

                                </textarea>
                            </div>
                            <div className="btn_container mt-4">
                                <Button type='submit' onClick={(e) => handleSubmit(e)} className="global_btn">
                                    submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContectForm
