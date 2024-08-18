import React from "react";
import Overlay from "@/components/ui/Overlay";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px] ">
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/about.jpg"
          fill
          alt="about image"
          className=" object-cover"
        />

        <Overlay />

        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          About Us
        </h1>
      </div>

      <div
        className="leading-8 text-lg bg-white 
      mt-[-80px] relative w-[90%] m-auto rounded-lg p-5 
      shadow-xl text-center max-md:mt-0 max-md:w-full
       max-md:bg-transparent 
        max-md:shadow-none
      "
      >
        <p>
          Welcome to Explore X, your ultimate companion for adventure and discovery! 
          Explore X is more than just a blog app—it's a vibrant community for those who
           live with curiosity and a passion for the world around them. Whether you're 
           an avid traveler, a local explorer, or someone who loves to dive deep into 
           new cultures and ideas, Explore X offers a platform to share your stories, insights, and experiences.
          Our mission is to inspire and connect like-minded adventurers who seek to 
          explore the extraordinary. From hidden gems in your hometown to far-flung destinations across the globe, Explore X is where your journey begins. Join us as we celebrate the beauty of exploration, one story at a time.
        </p>


        <div className="w-full items-center flex justify-center">
          <Image
            src='/assets/signature.png'
            width={500}
            height={500}
            alt="signature"
          />

        </div>
      </div>
    </div>
  );
};

export default page;
