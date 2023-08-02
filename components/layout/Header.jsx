'use client'
import { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import Logo from "../ui/Logo";
import Search from "../ui/Search";


const Header = () => {
  const [isSearchModal, setisSearchModal] = useState(false);
  
  return (
    <div className="h-[5.5rem] bg-primary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div className="m-10 relative left-5">
          <Logo />
        </div>
        <nav>
          <ul className="flex uppercase items-center">
            <li className="nav-item active px-[5px] hover:text-secondary">
              <a className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item px-[10px] hover:text-secondary">
              <a className="nav-link" href="menu.html">
                Menu
              </a>
            </li>
            <li className="nav-item px-[10px] hover:text-secondary">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item px-[10px] hover:text-secondary">
              <a className="nav-link" href="book.html">
                Book Table
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex m-10 items-center">
          <button
            className="px-[10px] relative right-5  hover:text-secondary"
            href="#"
          >
            <FaUserAlt />
          </button>
          <button 
            className="px-[10px] relative right-5 hover:text-secondary"
            href="#"
          >
            <FaShoppingCart />
          </button>
          
             <button onClick={() => setisSearchModal(true)}
            className="px-[10px] relative right-5 color:white hover:text-secondary"
          >
            <ImSearch />
          </button>
        
        
          <button className="btn-primary">Login</button>
        </div>
      </div>
      {isSearchModal && <Search setisSearchModal={setisSearchModal}/> }
    
      
    </div>
  );
};

export default Header;
