import React from 'react'
import { useNavigate } from 'react-router-dom'

import './ThankYou.css'

const ThankYou=()=> {
    const navigate = useNavigate()
    const goToProduct = () => {
        navigate('/plants')
    }
    return(
        <div className='thank-container'>
            <h1 className='congo'>Congratulations Order Placed!</h1>
            <img src='https://res.cloudinary.com/dfpz92ddp/image/upload/v1729394514/plant_1_jtb5di.png' alt='plant-logo' className='plant' />
            <p className='para'>Thank you for choosing Chaperone services.
            We will soon get in touch with you!</p>
            <button className='continue-button' onClick={goToProduct}>CONTINUE SHOPPING</button>
        </div>
    )
}

export default ThankYou