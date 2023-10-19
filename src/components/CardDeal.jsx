import React from 'react'
import { card } from '../assets'

const CardDeal = () => {
    return (
        <div className='carddeal flex_center  '>
            <div className="carddeal_content">
                <h2>Find a better card deal<br className='br_tag' /> in few easy steps.</h2>
                <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <button className='bg-blue-gradient' type='button'>Get Started</button>
            </div>

            <div className="carddeal_img">
                <img src={card} alt="card" />
            </div>
        </div>
    )
}

export default CardDeal