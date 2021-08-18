import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className='site_footer'>
            <div className="container">
                <div className="row">
                    <div className="img_container">
                        <img src="/image/slack.png" alt="logo" />
                        <span>
                            mr RESTAURANT
                        </span>
                    </div>
                    <div className="page_links">
                        <Link to='/about/us/'>about us</Link>
                        <Link to='/blog/'>blog</Link>
                        <Link to='/services/'>service</Link>
                    </div>
                    <div className="copy_write">
                        <span>
                            © 2021 MR RESTAURANT IS PROUDLY POWERED BY <a href="https://preview-shop.netlify.app/"> <i>Mr Lighthouse</i> </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
