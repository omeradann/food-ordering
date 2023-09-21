import React from "react";
import Image from "next/image";
import Title from "./Title";

const Carousel = () => {
  return (
    <div className="h-[calc(100vh_-_88px)] w-full container mx-auto">
      <div className="absolute left-0 w-full h-full ">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            priority={true}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="relative z-50 top-40 text-white flex flex-col items-start gap-y-10">
        
        <Title addClass="text-6xl">Fast Food Restaurant</Title>
        <p className="">
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