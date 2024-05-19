import './App.css'
import Homepage from './components/Homepage'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flavors from './components/Flavors';
import Energy from './components/Energy';
gsap.registerPlugin(useGSAP, ScrollTrigger);
import LocomotiveScroll from "locomotive-scroll";
import About from './components/About';



function App() {
  
const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Homepage/>
      <Energy/>
      <Flavors/>
      <About/>
    </>
  )
}

export default App
