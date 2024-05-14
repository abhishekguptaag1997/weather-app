import Image from "next/image";
import React from "react";
import "./styles/hourForecast.css";

const HourForecast = ({ data }) => {
  // console.log("data = ",data)

  return (
    <div className="flex flex-row *:mx-3  p-1  hover:overflow-x-auto overflow-hidden  ">
      {data && data.map((hourData) => <HourCard hourData={hourData} />)}
    </div>
  );
};

export default HourForecast;

const HourCard = ({ hourData }) => {
  // console.log("hourData",hourData)
  return (
    <>
      <div className="flex flex-col items-center justify-between  ">
        <span>
          {hourData && <span>{new Date(hourData.time).getHours()}</span>}
        </span>
        <span>
          {hourData && (
            <Image
              src={`http:${hourData.condition.icon}`}
              alt="icon"
              width={40}
              height={30}
            />
          )}
        </span>
        <span className="md:text-[0.8rem]">{hourData && <span>{hourData.temp_c}°C</span>}</span>
      </div>
    </>
  );
};
