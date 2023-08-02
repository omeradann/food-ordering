import {useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";

const Search = ({setisSearchModal}) => {
    
  return (
   <div className='fixed top-0 left-0 w-screen h-screen bg-black z-50
   after:content-[""] after:w-screen after:h-screen after:bg-secondary after:absolute after:top-0 after:left-0 opacity-50 grid place-content-center'> 
    <OutsideClickHandler onOutsideClick={() => setisSearchModal(false)}>
        <div className='w-full h-full grid place-content-center'>
           <div className='relative z-50 text-8xl text-red-600'><Title>Title</Title></div> 
        </div>
    </OutsideClickHandler>
    </div>
  )
}

export default Search