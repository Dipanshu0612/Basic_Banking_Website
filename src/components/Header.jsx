import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';


export default function Header() {
  let [menuicon, changemenuicon] = useState(false);

  return (
    <div className='flex flex-wrap justify-between items-center bg-gray-900 h-[4.5rem] sticky top-0 z-10 '>
      <div className="logo flex flex-wrap">
        <a href="/" className='flex flex-wrap justify-center items-center cursor-pointer font-semibold'><img src="https://www.thesparksfoundationsingapore.org/images/logo_small.png" alt="" className='h-10 mx-4 bg-gradient-to-t from-white to-gray-400 inline' /><p className='text-white text-2xl sm:text-[1rem]'>Bank Of Sparks</p></a>
      </div>
      <div className="nav" id='nav'>
        <ul className='flex flex-wrap justify-centre items-center mr-4 space-x-5'>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold "><Link to="/" activeClassName='active'>Home</Link></li>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold" ><Link to="/about-us" activeClassName='active'>About Us</Link></li>
          <li className="text-white cursor-pointer py-[1.37rem] font-semibold" ><Link to="/customer-list" activeClassName='active'>View Customers</Link></li>
        </ul>
      </div>
      {menuicon ? <AiOutlineClose id='menuicon' onClick={() => {
        document.getElementById('nav').style.display = 'none'
        changemenuicon((prevState) => !prevState)
      }} />
        : <AiOutlineMenu id='menuicon' onClick={() => {
          document.getElementById('nav').style.display = 'block'
          changemenuicon((prevState) => !prevState)
        }} />}

    </div>
  )
}
