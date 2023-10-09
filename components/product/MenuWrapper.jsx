import React from 'react'
import Title from '../ui/Title'

function MenuWrapper() {
  return (
    <div className='container mx-auto flex flex-col items-center mb-20'>
        <Title addClass="text-4xl">Our Menu</Title>
        <div className='flex gap-x-10 mt-10'>
            <button className='px-6 py-2 bg-primary rounded-3xl text-white'>All</button>
            <button className='px-6 py-2 rounded-3xl'>Burger</button>
            <button className='px-6 py-2 rounded-3xl'>Pizza</button>
            <button className='px-6 py-2 rounded-3xl'>Drinks</button>
           
        </div>
    </div>
  )
}

export default MenuWrapper