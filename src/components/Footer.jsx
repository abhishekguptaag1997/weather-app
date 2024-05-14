import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='-z-10 relative bottom-0 w-[100vw] flex flex-col items-center  bg-blue-900 bg-opacity-20 p-1' >
        <div className=''>
            <ul className='flex flex-row  justify-between *:p-2'>
                <li><FaFacebook size={25} /></li>
                <li><FaInstagram size={25} /></li>
                <li><FaSquareTwitter size={25} /></li>
            </ul>
        </div>
          
        <div>
            <ul className='flex flex-row *:px-1'>
                <li>Terms of Use</li>
                <li className='flex items-center '><FaDotCircle size={3} /></li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className='flex *:px-1 font-extralight *:text-xs'> 
            <span className='flex items-center'><FaCopyright  size={12}/></span>
            <span>2024</span>
            <span>Weather App</span>
        </div>
    </div>
  )
}

export default Footer