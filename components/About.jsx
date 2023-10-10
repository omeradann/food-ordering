import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className=" bg-primary p-24">
      <div className="container mx-auto flex items-center mt-20 gap-20">
        <div>
          <div className="relative w-[445px] h-[600px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>

        <div className="text-white">
          <Title addClass="text-[40px]">We Are Feane</Title>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary">Read More </button>
        </div>
      </div>
    </div>
  );
};

export default About;
