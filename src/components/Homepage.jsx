import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const Homepage = () => {
  useGSAP(()=>{
    gsap.to(".star", {
      rotate: 80,
      ease: "power2.in",
      scrollTrigger: {
        trigger:".star",
        scroller:"body",
        markers: true,
        scrub: 1,
      },
    })
  })
  return (
    <>
      <div className="relative w-full h-[130vh] sm:h-[100vh] bg-[#ffec85] overflow-hidden">
        <div>
          <img
            src="yellow-star-m.png"
            className="star absolute left-[5%] md:top-[35%] md:left-0 -translate-x-[50%]"
            alt=""
          />
        </div>

        <div className="nav p-4">
          <img src="redbull-1.png" className="w-24 md:w-12" alt="" />
        </div>
        <div className='text-center relative font-["Bebas_neue"] leading-[15vmax] text-[20vmax] sm:text-[15.5vmax] font-bold mt-12 text-[#333]'>
          <h1>THE EXPLOSIVE</h1>
          <h1>ENERGY DRINK</h1>
        </div>
      </div>
    </>
  );
}

export default Homepage