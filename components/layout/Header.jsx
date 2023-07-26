import React from 'react'
import Logo from '../ui/Logo'

const Header = () => {
  return (
    <div className='h-[5.5rem] bg-primary'>
      <div className='container mx-auto text-white flex justify-between items-center h-full'>
        <div className='m-10'>
        <Logo/>
       </div>
       <nav>
       <ul className='flex uppercase'>
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
            <div className='m-16'>
            <button class="bg-primary hover:text-secondary active:bg-secondary focus:outline-none focus:ring focus:bg-secondary ...">
  Save changes
</button>
            </div>
      </div>
       
    </div>
   
  )
}

export default Header