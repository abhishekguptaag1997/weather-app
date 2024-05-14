const { httpAxios } = require("@/helper/httpHelper");

export const getWeatherDetails = async (city, days) => {
   
  const result = await httpAxios
    .get(`${process.env.NEXT_PUBLIC_SUB_URL}key=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&days=${days}`)
    .then((response) => response.data).catch((error)=>false);

    // console.log("result ", result);
    return result;
};
