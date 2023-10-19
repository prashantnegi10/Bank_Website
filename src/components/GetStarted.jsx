import React from 'react'
import { arrowUp } from '../assets'
import '../App.css'

const GetStarted = () => {
    return (
        <div className='getstarted flex_center bg-blue-gradient'>
            <div className="getstarted_inner flex_center bg-primary">
                <div className="getstarted_content flex_center">
                    <p className='getstarted_text'>
                        <span className='text-gradient'>Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow up" />
                </div>
                <p className='getstarted_text'>
                    <span className='text-gradient'>Started</span>                    </p>
            </div>
        </div>
    )
}

export default GetStarted