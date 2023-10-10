import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

function MenuWrapper() {
  return (
    <div className='container mx-auto mb-20'>
        <div className='flex flex-col items-center'>
        <Title addClass="text-4xl">Our Menu</Title>
        <div className='flex gap-x-6 mt-10'>
            <button className='px-6 py-2 bg-primary rounded-3xl text-white'>All</button>
            <button className='px-6 py-2 rounded-3xl'>Burger</button>
            <button className='px-6 py-2 rounded-3xl'>Pizza</button>
            <button className='px-6 py-2 rounded-3xl'>Drinks</button>
        </div>
        </div>
        
        <div className='mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
        
    </div>
  )
}

export default MenuWrapper