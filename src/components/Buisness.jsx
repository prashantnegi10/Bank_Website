import React from 'react'
import { features } from '../constants'

const Buisness = () => {
    return (
        <div className='buisness section_padding' id='features'>
            <div className="buisness_container">
                <div className="buisness_text">
                    <h3>You do the business, we’ll handle the money.</h3>
                    <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <button type='button' className='bg-blue-gradient'>Get Started</button>
                </div>

                <div className="buisness_features">
                    {
                        features.map((data, ind) => (
                            <div className="buisness_features-content">
                                <div className="buisness_features-img bg-black-gradient flex_center">
                                    <img src={data.icon} style={{ width: '40%', height: '40%' }} alt="star" />
                                </div>
                                <div className="buisness_features-text">
                                    <h4>{data.title}</h4>
                                    <p>{data.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Buisness