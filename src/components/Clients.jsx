import React from 'react'
import { clients } from '../constants'

const Clients = () => {
    return (
        <div className='client' id='clients'>
            {
                clients.map((data, ind) => (
                    <div className='client_img'>
                        <img src={data.logo} alt="client" />
                    </div>
                ))
            }
        </div>
    )
}

export default Clients