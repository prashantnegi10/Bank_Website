import React from 'react'
import { feedback } from '../constants'
import { quotes } from '../assets'

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="testimonials_content">
                <h2>What people are saying about us</h2>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>

            <div className="testimonials_cards">
                {feedback.map((data, index) => (
                    <div className='card'>
                        <img src={quotes} alt="quotes" />
                        <p className='card_para'>{data.content}</p>
                        <div className='card_content'>
                            <img src={data.img} alt="img" />
                            <div className="card_name">
                                <p className='name'>{data.name}</p>
                                <p className='title'>{data.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials