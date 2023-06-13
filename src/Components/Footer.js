import React from 'react';
import './Footer.css';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
function Footer() {
    return (
        <div>
            <section className="footer">
                <>
                    <div className="container">
                        <div className="row">
                            <div className="social-media-icons">
                                <a href="https://twitter.com" className='facebook'><FaFacebook /></a>
                                <a href="https://instagram.com" className='instagram'><FaInstagram /></a>
                                <a href="https://youtube.com" className='youtube'><FaYoutube /></a>
                                <a href="https://facebook.com" className='twitter'><FaTwitter /></a>
                            </div>
                            <div className="copyrights py-5 text-white">
                                <p>Copyright © 2023 TermsFeed®. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </>
            </section>
        </div>
    )
}

export default Footer
