import Image from 'next/image'
import React from 'react'

const DayCard = ({data,day}) => {

    // console.log("data = ",data)

  return (
    <>
        <div className='grid grid-cols-4 grid-rows-5 h-full '>
            <div className='col-span-full row-span-1 text-center pt-2  '>{day && <span>{day}</span>}</div>
            
            <div className='col-span-full row-span-2 flex justify-between px-2'>    
                <div className='flex flex-col'>
                <span className='md:text-[1.8rem] font-light'>{data && <span>{data.maxtemp_c}°C</span>}</span>
                <span className='font-extralight md:text-[0.7rem]'>{data && <span>{data.condition.text.toUpperCase()}</span>}</span>
                </div>
                <div>
                {data && <Image src={`http:${data.condition.icon}`} alt="icon" width={50} height={70} />}
                </div>
            </div>

            <div className='col-span-full row-span-2 flex justify-between px-2'>    
                <div className='flex flex-col'>
                <span className='md:text-[1.8rem] font-light'>{data && <span>{data.mintemp_c}°C</span>}</span>
                <span className='font-extralight md:text-[0.7rem]'>{data && <span>{data.condition.text.toUpperCase()}</span>}</span>
                </div>
                <div>
                {data && <Image src={`http:${data.condition.icon}`} alt="icon" width={50} height={70} />}
                </div>
            </div>

        </div>
    </>
  )
}

export default DayCard