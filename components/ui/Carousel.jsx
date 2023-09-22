import React from "react";
import Image from "next/image";
import Title from "./Title";

const Carousel = () => {
  return (
    <div className="w-full h-full container mx-auto flex-auto -mt-[120px]">
      <div className="absolute left-0">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            width={5000}
            height={5000}
            alt=""
            style={{objectFit:"cover"}}
          />
        </div>
      </div>
      <div className="relative  z-40 top-40 text-white flex flex-col items-start gap-y-10">
        
        <Title addClass="text-6xl">Fast Food Restaurant</Title>
        <p className="text-sm sm:w-2/5 w-full">
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
        <button className="btn-primary">Order Now</button>
      </div>
    </div>
  );
};

export default Carousel;
