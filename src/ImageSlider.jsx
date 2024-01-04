import  { useEffect, useState } from "react";
import  {GrPrevious}  from "react-icons/gr";
import  {GrNext}  from "react-icons/gr";
import {url} from "./constants/datafile.js"

const ImageSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const prevclick = () => {
    setImgIndex(imgIndex===0? url.length-1: imgIndex-1);
    };
    const nextclick = () => { 
    setImgIndex(imgIndex===url.length-1? 0: imgIndex+1);
      };
  
      useEffect(() => {
        const interval = setInterval(() => {
          setImgIndex(imgIndex===url.length-1? 0: imgIndex+1);
        }, 3000);
        return () => clearInterval(interval);
      }, [imgIndex,]);
 
  return (
    <div className="flex justify-center">
     <button className="p-4 m-8 flex items-center justify-center" 
            onClick={prevclick}>
            <GrPrevious/>
    </button> 

    {url.map((items, index) => ( 
    <img key={items}
    src={items} className={"w-[500px] top-1/2 h-[500px] object-contain " +(imgIndex==index? "block": "hidden") } 
    alt="pictures"/>))}

    <button className="p-4 m-8 flex items-center justify-center" 
        onClick={nextclick}>
           <GrNext/>
    </button>
    </div>
  )
}

export default ImageSlider