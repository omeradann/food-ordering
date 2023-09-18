import React from 'react'
import Image from "next/image";

const Carousel = () => {
  return (
    <div className='h-screen'>
      <div>
        <Image src="/images/hero-bg.jpg" alt="" layout='fill'/>
      </div>
    </div>
  )
}

export default Carousel