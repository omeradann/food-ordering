import React from 'react'
import Title from '../ui/Title'

function MenuWrapper() {
  return (
    <div className='container mx-auto flex flex-col items-center'>
        <Title addClass="text-4xl">Our Menu</Title>
        <div>
            <button>All</button>
            <button>Burger</button>
            <button>Pizza</button>
            <button>Other</button>
        </div>
    </div>
  )
}

export default MenuWrapper