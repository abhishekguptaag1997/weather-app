"use client";
import CityContext from "@/app/context/cityContext";
import React, { useContext, useEffect } from "react";
import Weather from "./Weather";
import Image from "next/image";

const Display = () => {
  let { city } = useContext(CityContext);

{/* <div style={{backgroundImage : `url('/bg.jpg')`,height:'90vh',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}></div> */}

  return (
    <>
      <div  className="h-auto">
      {city ? <Weather city={city} /> : <div className="text-center text-2xl h-[90vh] p-6 font-medium">Please Enter a city!</div>}
      </div>
        
     
    </>
  );
};

export default Display;
