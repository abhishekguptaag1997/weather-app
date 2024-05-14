import Image from "next/image";
import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const HourCard = ({ time, data }) => {
  // console.log("data,hour = ",data);
  return (
    <div className="grid grid-cols-5 grid-rows-3 h-full ">
      <div className="col-span-full text-center">
        {time && <span>{time}</span>}
      </div>
      <div className="col-span-2 row-span-2 text-center flex justify-center">
        {data && (
          <Image
            src={`http:${data.condition.icon}`}
            alt="icon"
            width={80}
            height={80}
          />
        )}
      </div>
      <div className="col-span-3 row-span-3 flex flex-col text-left">
        <span className="md:text-[1.5rem] font-light">
          {data && <span>{data.temp_c}°C</span>}{" "}
        </span>
        <span className="font-extralight md:text-[0.7rem]">
          {data && <span>{data.condition.text.toUpperCase()}</span>}
        </span>
      </div>
    </div>
  );
};

export default HourCard;
