import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { VscAccount } from "react-icons/vsc";
import { PiShoppingCart } from "react-icons/pi";
import { TfiSearch } from "react-icons/tfi";

import './Header.css'



const Header=()=> {
    const [userInput, setuserInput] = useState('')

    const onChangeUserInput = event => {
        setuserInput(event.target.value)
    }

    return (
        <header className='header'>
            <div className='contact-info'>
                <p>
                    Free Shipping on orders above 999/-
                </p>
                <p>
                    Call us on: +91 98768 05120
                </p>
                
            </div>
            <nav className='nav-container'>
                <div className='logo-container'>
                    <img src='https://res.cloudinary.com/dfpz92ddp/image/upload/v1729327353/image_55_uwjdth.png' alt='company-logo' className='logo' />
                    <h1 className='name'>Chaperone</h1>
                </div>
                <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/plants' className='link'>Plants & Pots</Link></li>
                    <li><select ><option>Tools</option></select></li>
                    <li><select ><option>Our Services</option></select></li>
                    <li><Link to='#' className='link'>Blog</Link></li>
                    <li><Link to='#' className='link'>FAQs</Link></li>
                </ul>

                <div className='user-container'>
                    <div className='user-profile'>
                        <VscAccount size={20}/>
                        <p className='user'>My Profile</p>
                    </div>
                    <div className='user-profile'>
                        <PiShoppingCart size={20}/>
                        <p className='user'>Cart</p>
                    </div>
                </div>
            </nav>
            <div className='search-container'>
            <TfiSearch size={14} color='gray' />
            <input type='search' placeholder='Search Plant' className='input-search' value={userInput} onChange={onChangeUserInput}/>
            <img src='https://res.cloudinary.com/dfpz92ddp/image/upload/v1729345038/image_91_psgsqo.png' alt='leaf-icon' className='leaf-icon' />
            </div>
        </header>
    )
}

export default Header