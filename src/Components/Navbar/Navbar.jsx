import React from 'react'
import './Navbar.css'
import cart from '../../Components/Assets/logo.png'
import {useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[menu,setMenu]= useState("shop");

  return (
    <>
    <div className='header'>
      <div className='logo'><b>SHOPPER</b></div>

      <div className='navbar'>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to='/Mens'>Mens</Link>{menu==="Mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}} to='/Womens'>Womens</Link>{menu==="Womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className='right-menu'>
        <Link to='/Login'>
          <button>Login</button>
          </Link>
        <Link to='/Cart'> <img className='cart_logo' src={cart} alt=' '></img></Link>
          {/* <div className='.nav-cart-count'>0</div> */}
        </div>
    </div>
  </>
  )
}

export default Navbar
