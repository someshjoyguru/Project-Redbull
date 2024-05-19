import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Blank = () => {
    useGSAP(()=>{
        gsap.to(".star", {
          rotate: 80,
          ease: "power2.in",
          scrollTrigger: {
            scroller: "body",
            markers: true,
            scrub: 4,
          },
        });
    })
  return (
    <div className="main relative w-full h-[180vh] bg-[#ff5959] overflow-hidden">
      <img className="bg-[#333]" src="red-border.svg" alt="" />
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="z-[99] relative text-[20vmax] text-center leading-none font-bold text-[#ffedd7] font-['Bebas_neue'] overflow-hidden">
          MORE FLAVORS
        </h1>
        <button className="bg-[#ffedd7] px-10 py-4 border-none rounded-[50px]">Shop Collection</button>
        <img
          src="red-star-m.png"
          className="absolute z-[1] top-[45%] star w-100"
          alt=""
        />
      </div>
    </div>
  );
}

export default Blank