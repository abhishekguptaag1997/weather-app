"use client"
import { useState } from "react"
import CityContext from "./cityContext";


const CityProvider = ({children})=>{

    const [city, setCity] = useState();


    return (
        <CityContext.Provider value={{city,setCity}} >
                {children}
        </CityContext.Provider>
    )

}

export default CityProvider;