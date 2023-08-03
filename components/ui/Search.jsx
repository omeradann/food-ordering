import {useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";
import {CgCloseR} from "react-icons/cg";


const Search = ({setisSearchModal}) => {
    
  return (
   <div className='fixed top-0 left-0 w-screen h-screen bg-black z-50
   after:content-[""] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 grid place-content-center'> 
    <OutsideClickHandler onOutsideClick={() => setisSearchModal(false)}>
        <div className='w-full h-full grid place-content-center'>
           <div className='relative z-50 text-black text-center w-[600px] h-[600px] bg-white border-2 p-5'>
           <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block">
            <Title addClass="text-[40px] text-center relative text-black">Search</Title></span>
            
           <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
            </span>
            <input placeholder='Search for anything...' type='text' className='italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 my-10 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm'></input>
            </label>

 

           <div>
            <ul className='mt-6'>
                <li className='flex items-center justify-between p-2 hover:bg-secondary transition-all rounded-md py-2 pr-3 my-5 shadow-sm focus:outline-none'>
                    <div className='flex'>
                        <img className='relative' src="/images/f1.png" 
                        alt=""
                        layout="fill"
                        width={48}
                        />
                    </div>
                    <span className='font-bold'>Good Pizza</span>
                    <span className='font-bold'>$10</span>
                </li>
                <li className='flex items-center justify-between p-2 hover:bg-secondary transition-all rounded-md py-2 pr-3 my-5 shadow-sm focus:outline-none'>
                    <div className='flex'>
                        <img className='relative' src="/images/f1.png" 
                        alt=""
                        layout="fill"
                        width={48}
                        />
                    </div>
                    <span className='font-bold'>Good Pizza</span>
                    <span className='font-bold'>$10</span>
                </li>
                <li className='flex items-center justify-between p-2 hover:bg-secondary transition-all rounded-md py-2 pr-3 my-5 shadow-sm focus:outline-none'>
                    <div className='flex'>
                        <img className='relative' src="/images/f1.png" 
                        alt=""
                        layout="fill"
                        width={48}
                        />
                    </div>
                    <span className='font-bold'>Good Pizza</span>
                    <span className='font-bold'>$10</span>
                </li>
            </ul>
            <button
            className="absolute top-2 right-2"
            href="#"
          >
            <CgCloseR size={20} className=' hover:text-secondary transition-all'/>
          </button>
           </div>

           
           </div>
           
         
                      
          
        </div>
    </OutsideClickHandler>
    </div>
  )
}

export default Search