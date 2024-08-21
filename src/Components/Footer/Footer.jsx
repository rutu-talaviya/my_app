import React from 'react'
import './Footer.css'
import Instagram_icon from '../Assets/instagram_icon.png'
import Pinterest_icon from '../Assets/pinterest_icon.png'
import WhatsApp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='shopper'>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img className='insta' src={Instagram_icon}></img>
        </div>
        <div className='footer-icons-container'>
            <img className='pinterest' src={Pinterest_icon}></img>
        </div>
        <div className='footer-icons-container'>
            <img className='whatsapp' src={WhatsApp_icon}></img>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
