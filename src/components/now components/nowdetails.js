import React, { useEffect, useState } from "react"
import "../../styles/now.css"

export default function Nowdetails(){

  const [fetchdata,setfetchdata]=useState();
  const [day,setday] = useState(null);
  const [month,setmonth]=useState(null);
  const [time,settime]=useState(null);

  async function getdata(){

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
    "Aug","Sept","Oct","Nov","Dec"];

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=kodungallur&units=metric&appid=55b2f4b739998d82795ba5cabb50890f',{mode:'cors'});
    const result = await response.json();
    setfetchdata(result);
   
    let d= new Date().toLocaleString("en-US",{ timeZone: result.timeZone });

    let curren_date = new Date(d);
    let month = months[curren_date.getMonth()];
    setmonth(month);

    let day = days[curren_date.getDay()];
    setday(day);

    let time = curren_date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    settime(time);
  }

  useEffect(()=>{
    getdata();
    console.log(fetchdata);
  },[day])

  return(
    <div className="nowdetails">

       <div className="dateandtime">
          <span>{day}</span>
          <span>{month},</span>
          <span>{time}</span>
       </div>

    </div>
  )
}