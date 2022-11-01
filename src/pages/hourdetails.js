import React, { useEffect, useState } from "react";
import cloud from "../assets/04d.svg";
import { useSelector } from "react-redux";
import "../styles/hourly.css";
import Heading from "../components/heading";
import Togglebtn from "../components/togglebtn";
import "../styles/App.css";

export default function Hourlydetails() {

    const input = useSelector((state) => state.redux.input);
   
    const [data,setdata]=useState([]);
    

    async function getdata() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input+'&cnt=5&units=metric&appid=55b2f4b739998d82795ba5cabb50890f&exclude=minutely,hourly', { mode: 'cors' });
        const result = await response.json();
        setdata(result.list);
    }

    const d=(date)=>{
        const dat = new Date(date);
        let time = dat.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        return(time);
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <div className="hourlydeails">
            <div className="App ">
            <Heading/>
            <Togglebtn/>
             </div>
            {data.map((list,index)=>{
                return(
                    <div className="hour-weather-details">
                       <div>{d(list.dt_txt)}</div>
                       <div className="hourly-weather">{Math.round(list.main.temp)}&#8451;</div>
                       <img src={cloud}/>
                    </div>
                )
            })}
        </div>
    )
}