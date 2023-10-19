import React from 'react'
import { logo, instagram, facebook, twitter, linkedin } from '../assets'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_container">
                <div className="footer_logo">
                    <img src={logo} alt="logo" />
                    <p>A new way to make the payments easy, reliable and secure.</p>
                </div>

                <div className="links">
                    <div className="footer_link">
                        <h4>Usefull Links</h4>
                        <ul>
                            <li>Content</li>
                            <li>How it Works</li>
                            <li>Create</li>
                            <li>Explore</li>
                            <li>Terms & Services</li>
                        </ul>
                    </div>

                    <div className="footer_community">
                        <h4>Community</h4>
                        <ul>
                            <li>Help Center</li>
                            <li>Partners</li>
                            <li>Suggestions</li>
                            <li>Blog</li>
                            <li>Newsletters</li>
                        </ul>
                    </div>

                    <div className="footer_partner">
                        <h4>Partner</h4>
                        <ul>
                            <li>Our Partner</li>
                            <li>Become a Partner</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: '1px', border: '1px solid #3F3E45', margin: '1rem 0' }} />

            <div className="footer_copywrite">
                <div className="footer_copywrite-text">
                    <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
                </div>
                <div className="footer_links-icons">
                    <img src={instagram} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />
                </div>
            </div>
        </div>
    )
}

export default Footer