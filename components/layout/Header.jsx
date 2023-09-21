'use client'
import { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import {CgCloseR} from "react-icons/cg";
import Logo from "../ui/Logo";
import Search from "../ui/Search";


const Header = () => {
  const [isSearchModal, setisSearchModal] = useState(false);
  const [isMenuModal, setisMenuModal] = useState(false);
  
  return (
    <div className="h-[5.5rem] bg-primary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div className="">
          <Logo />
        </div>
        <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"}`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col uppercase items-center relative left-16 word-wrap:normal">
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
          {isMenuModal && (<button
            className="absolute top-2 right-2 z-50"
            href="#"
            onClick={() => setisMenuModal(false)}
          >
            <CgCloseR size={20} className=' hover:text-secondary transition-all'/>
          </button>
          )}
          
        </nav>
        <div className="flex m-10 items-center">
          <button
            className="px-[10px] relative left-5 hover:text-secondary"
            href="#"
          >
            <FaUserAlt />
          </button>
          <button 
            className="px-[10px] relative left-5 hover:text-secondary"
            href="#"
          >
            <FaShoppingCart />
          </button>
          
             <button onClick={() => setisSearchModal(true)}
            className="px-[10px]  relative left-5 color:white hover:text-secondary"
          >
            <ImSearch />
          </button>
        
        
          <button className="btn-primary md:inline-block hidden sm relative left-10">Login</button>
        </div>
        <button onClick={() => setisMenuModal(true)} className="color:white hover:text-secondary text-lg relative right-6 sm:hidden inline-block">
        <TiThMenu/>
        </button>
        
      </div>
      {isSearchModal && <Search setisSearchModal={setisSearchModal}/> }
    
      
    </div>
  );
};

export default Header;
