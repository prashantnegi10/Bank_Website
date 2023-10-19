import React from 'react'
import { apple, bill, google } from '../assets'

const Billing = () => {
    return (
        <div className='billing flex_center ' id='product'>
            <div className="billing_img">
                <img src={bill} alt="bill" />
            </div>
            <div style={{ position: 'absolute', width: '50%', height: '50%', top: '0', left: '1/2', zIndex: '3' }} className='white__gradient' />
            <div style={{ position: 'absolute', width: '50%', height: '50%', top: '0', left: '1/2', zIndex: '0' }} className='white__pinkt' />

            <div className="billing_content">
                <h2>Easily control your<br className='br_tag' /> billing & invoicing.</h2>
                <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className="billing_content-icons">
                    <img src={apple} alt="apple" />
                    <img src={google} alt="google" />
                </div>
            </div>
        </div>
    )
}

export default Billing