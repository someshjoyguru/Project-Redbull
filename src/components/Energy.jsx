import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { IoBatteryCharging } from "react-icons/io5";
import { GiDiamondsSmile } from "react-icons/gi";
import { GiSpikyWing } from "react-icons/gi";
function Black() {
  return (
    <>
      <div className="w-full bg-[#333] relative">
        <div className="top-layer absolute top-[-8%] sm:top-[-25px]">
          <img src="black-border.svg" alt="" />
        </div>

        <div className="relative">
          <img className="boom-layer" src="boom_layer.svg" alt="" />
          <img
            className="top-layer absolute top-0"
            src="top_layer.svg"
            alt=""
          />
        </div>

        <div className="font-['bebas_neue'] font-bold text-[#ffedd7] leading-[28vmax] text-[30vmax] md:text-[15vmax] md:leading-none px-4 py-12">
          <h1>GIVES YOU</h1>
          <span className="flex items-center gap-6">
            WIIINGS <GiSpikyWing />
          </span>
        </div>

        {/* <div className="flex justify-between px-10 text-white">
          <span className="flex flex-col gap-4">
            <FaLeaf size={50} color="#ffedd7" className="opacity-50" />
            <h1 className="font-[gilroy] text-4xl opacity-50 font-medium leading-none">
              Proudly made with <br /> natural ingredients
            </h1>
          </span>
          <span className="flex flex-col gap-4">
            <IoBatteryCharging
              size={50}
              color="#ffedd7"
              className="opacity-50"
            />
            <h1 className="font-[gilroy] text-4xl opacity-50 font-medium leading-none">
              Keeps you mentally <br /> charged and ready
            </h1>
          </span>
          <span className="flex flex-col gap-4">
            <GiDiamondsSmile size={50} color="#ffedd7" className="opacity-50" />
            <h1 className="font-[gilroy] text-4xl opacity-50 font-medium leading-none">
              Your cheerful pick
              <br />
              -me-up
            </h1>
          </span>
        </div> */}
      </div>
    </>
  );
}

export default Black;
