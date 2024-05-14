import React from 'react'

const WeeklyForecast = ({data}) => {

  // console.log("weekly Data =",data);
  const date = new Date(data.forecastday[0].date_epoch);
  console.log(date.getDay());

  return (
    <div>WeeklyForecast</div>
  )
}

export default WeeklyForecast

