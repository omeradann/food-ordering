import React from 'react'
import Logo from '../ui/Logo'
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa'
import {BiSearchAlt2} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='h-[5.5rem] bg-primary'>
      <div className='container mx-auto text-white flex justify-between items-center h-full'>
        <div className='m-10 relative left-10'>
        <Logo/>
       </div>
       <nav>
       <ul className='flex uppercase items-center'>
              <li class="nav-item active px-[5px] hover:text-secondary">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item px-[5px] hover:text-secondary">
                <a class="nav-link" href="menu.html">Menu</a>
              </li>
              <li class="nav-item px-[5px] hover:text-secondary">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item px-[5px] hover:text-secondary">
                <a class="nav-link" href="book.html">Book Table</a>
              </li>
            </ul>
            </nav>
            <div className='flex m-10'>
            <a className="px-[10px] relative right-12 top-3" href="#">
            <FaUserAlt/>
            </a>
            <a className='px-[10px] relative right-12 top-3' href="#">
            <FaShoppingCart/>
            </a>
            <a className='px-[10px] relative right-12 top-3' href="#">
            <BiSearchAlt2/>
            </a>
            <button className='btn-primary relative right-7'>Login</button>
            </div>
            
      </div>
      
      
       
    </div>
   
  )
}

export default Header