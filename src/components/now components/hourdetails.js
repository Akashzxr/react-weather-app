import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Hourlydetails() {

    const lat = useSelector((state) => state.redux.lat);
    const long = useSelector((state) => state.redux.long);
   
    const [data,setdata]=useState();
    

    async function getdata() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=kodungallur&cnt=5&units=metric&appid=55b2f4b739998d82795ba5cabb50890f&exclude=minutely,hourly', { mode: 'cors' });
        const result = await response.json();
        setdata(result);
        console.log(result);
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <div className="hourlydeails">
            {}
        </div>
    )
}