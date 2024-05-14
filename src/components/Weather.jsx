"use client"
import React, { useEffect, useState } from "react";
import Main from "./weatherComponents/Main";
import HourForecast from "./weatherComponents/HourForecast";
import DayCard from "./weatherComponents/DayCard";
import HourCard from "./weatherComponents/HourCard";
import WeeklyForecast from "./weatherComponents/WeeklyForecast";
import { getWeatherDetails } from "@/services/weatherService";

const Weather = ({ city }) => {

  const [details, setDetails] = useState();

  const loadData =async (city)=>{
    try {
      const data =  await getWeatherDetails(city,4);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData(city);
  }, [city])
  
 
  return (
    <>
   
     <div  className=" py-3 px-8 sm:grid sm:grid-cols-12 sm:grid-rows-9 *:my-2 sm:gap-3 sm:h-full *:shadow-2xl hover:*:bg-slate-400/30 hover:*:shadow-black *:shadow-gray-800 *:rounded-lg lg:px-20 *:bg-slate-500/20  ">
        <div className="sm:col-span-6 sm:row-span-4">{details && <Main details={{...details}} />}</div>
        <div className="sm:col-span-6 sm:row-span-2 font-light text-[1.8rem] sm:text-[2.7rem]   flex justify-center items-center shadow-2xl rounded-xl px-1 ">{city && <span className="font-mono ">{city.toUpperCase()}</span>}</div>
        <div className="sm:col-span-3 sm:row-span-4"> {details && <DayCard day="TODAY" data={details.forecast.forecastday[0].day} />} </div>
        <div className="sm:col-span-3 sm:row-span-4">{details && <DayCard day="TOMORROW" data={details.forecast.forecastday[1].day} />} </div>
        <div className="sm:col-span-6 sm:row-span-2">{details && <HourForecast data={details.forecast.forecastday[0].hour} />}</div>
        <div className="sm:col-span-4 sm:row-span-2">{details && <HourCard time="MORNING" data = {details.forecast.forecastday[0].hour[8]}  />}</div>
        <div className="sm:col-span-4 sm:row-span-2">{details && <HourCard time="AFTERNOON" data = {details.forecast.forecastday[0].hour[15]}  />}</div>
        <div className="sm:col-span-4 sm:row-span-2">{details && <HourCard time="EVENING" data = {details.forecast.forecastday[0].hour[19]}  />}</div>
     </div>
        
    </>
  );
};

export default Weather;
