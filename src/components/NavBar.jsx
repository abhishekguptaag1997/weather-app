"use client";

import CityContext from "@/app/context/cityContext";
import { useContext, useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

const NavBar = () => {
  const [city, setCity] = useState();
  const cityContext = useContext(CityContext);

  const SearchCity = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Enter valid city");
      return;
    }
    console.log(city);

    cityContext.setCity(city);
  };

  return (
    <div>
      <div className="grid sm:grid-cols-6  w-screen justify-stretch px-3 py-2 sm:h-12 text-center items-center bg-blue-900 bg-opacity-40 *:mx-10">
        <div className="sm:col-span-2 font-bold text-lg ">Weather App</div>
        <form action="" onSubmit={SearchCity} className="sm:w-[40vw]">
          <div className="sm:col-span-3 flex   h-[2.3rem] rounded-md items-center p-1 bg-slate-300 ">
            <button type="submit">
              {city && (
                <FaSearchLocation
                  size={24}
                  className="hover:text-blue-800 cursor-pointer me-2"
                  onClick={SearchCity}
                />
              )}
            </button>

            <div className="w-full ">
              <input
                type="text"
                name="city"
                value={city}
                className=" w-full text-blue-800 font-semibold  bg-inherit outline-none "
                placeholder="Enter City"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              {city && (
                <TiDelete
                  size={26}
                  className="hover:text-red-800 cursor-pointer"
                  onClick={() => setCity("")}
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
