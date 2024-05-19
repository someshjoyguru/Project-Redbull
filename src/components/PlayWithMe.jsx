import React, { useState } from "react";
import "../styles/shape.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Homepage = () => {
  const [path, setPath] = useState("M 10 250 Q 250 250 490 250");
  useGSAP(()=>{
    gsap.to("svg path", {
      attr: { d: path },
      duration: 0.2,
      ease: "power3.out"
    });
  },[path])

  const mouseLeavingEffect = () => {
    gsap.to("svg path", {
        attr: { d: "M 10 250 Q 250 250 490 250" },
        duration: 1.3,
        ease: "elastic.out(1,0.2)"
    })
  }
  return (
    <>
      <div className="main h-screen w-full bg-zinc-800 flex justify-center items-center">
        <div
          className="box"
          onMouseMove={(dets) => {
            let x = dets.clientX;
            let y = dets.clientY;
            setPath(`M 10 250 Q ${x - 350} ${y} 490 250`);
            console.log(path);
          }}
          onMouseLeave={() => mouseLeavingEffect()}
        >
          <h1 className="text-white font-[gilroy] text-center font-bold">Play With Me</h1>
          <svg width={500} height={500} className="bg-zinc-700">
            <path
              d="M 10 250 Q 250 250 490 250"
              stroke="white"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Homepage;
