import React from 'react'
import { GetStarted } from '../components'
import { discount, robot } from '../assets'

const Header = () => {
    return (
        <div className='header flex_center' id='home'>
            <div className="header_content">
                <div className="header_discount bg-discount-gradient">
                    <img src={discount} alt="discount" />
                    <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
                </div>

                <div className="header_content-heading">
                    <h1 className='heading_style'>
                        The Next <br /> <span className='text-gradient'>Generation</span>
                    </h1>
                    <GetStarted />
                </div>
                <h1 className='heading_style head_style'>Payment Method</h1>
                <p className='heading_para'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.</p>
            </div>

            <div className="header_img flex_center">
                <img src={robot} alt="robot" />
                <div className='pink__gradient' style={{ position: 'absolute', zIndex: '0', width: '40%', height: '35%', top: '0' }} />
                <div className='white__gradient' style={{ position: 'absolute', zIndex: '1', width: '80%', height: '80%', bottom: '40' }} />
                <div className='blue__gradient' style={{ position: 'absolute', zIndex: '2', width: '50%', height: '50%', right: '20' }} />
            </div>
        </div>
    )
}

export default Header