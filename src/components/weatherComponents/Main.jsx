
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";
import { useEffect, useState } from "react";
import Image from "next/image";


const Main = ({details}) => {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let cDate = d.getDate()
    let day = weekday[d.getDay()];
    let cMonth = month[d.getMonth()];
    
    // console.log("details data", details);

  return (
    <>
        <div className='flex flex-col sm:grid md:grid-cols-3 md:grid-rows-4  h-full sm:grid-cols-5  p-2 overflow-x-hidden overflow-y-hidden *:my-1'>
                <div className="md:col-span-2 row-span-2 sm:col-span-3 flex sm:flex-col flex-row justify-center *:mx-2 ">
                    <span className='md:text-[2.4rem] sm:text-[2rem] text-[1.5rem] font-light' >{day && <>{day}</>}</span>
                    <span className='font-extralight md:text-[1.2rem] text-[1.5rem]'>{cMonth && <>{cMonth}</>} {cDate && <>{cDate}</>}</span>
                </div>
                <div className='md:col-span-1 sm:col-span-2 row-span-2 flex justify-center '><MoreDetail /></div>
                <div className='md:col-span-1 row-span-2  flex justify-center *:mx-2 sm:flex-col sm:justify-end'>
                    <span className='md:text-[2.1rem] sm:text-[1.6rem] font-light'>{details && <span>{details.current.temp_c}°C</span>}</span>
                    <span className='font-extralight md:text-[0.8rem] sm:text-[0.8rem]'> {details && <span>{details.current.condition.text.toUpperCase()}</span>}</span>
                </div>
                <div className=' md:col-span-1  row-span-2 sm:col-span-2 flex sm:justify-center justify-center '>
                       {details && <Image src={`http:${details.current.condition.icon}`} alt="icon" width={100} height={70} />}
                    </div>
                <div className=' md:col-span-1 row-span-2 flex justify-evenly'>
                    {details && <Sunrise time ={details.forecast.forecastday[0].astro.sunrise} />}
                    {details && <Sunset time ={details.forecast.forecastday[0].astro.sunset} />}
                </div>
        </div>
    </>
  )
}

export default Main;


const MoreDetail = ()=>{
    return (
        <>
           <div className="hidden">
            more details here...
           </div>
        </>
    )
}

const Sunrise =({time})=>{

    // console.log("time", time);
    return(
    <>
    <div className=" flex flex-col justify-end p-3 gap-2">
        <span className="font-extralight md:text-[0.8rem]">{time}</span>
        <span><LuSunrise size={30}/></span>
    </div>
    </>)
}

const Sunset =({time})=>{
    return(
    <>
    <div className=" flex flex-col justify-end p-3 gap-2">
        <span className="font-extralight md:text-[0.8rem]">{time}</span>
        <span><LuSunset size={30}/></span>
    </div>
    </>)
}