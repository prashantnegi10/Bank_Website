import React from 'react'
import { stats } from '../constants'

const Stats = () => {
    return (
        <div className='stat flex_center'>
            {
                stats.map((data, ind) => (
                    <div className='stat_content flex_center'>
                        <h4>{data.value}</h4>
                        <p>{data.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Stats