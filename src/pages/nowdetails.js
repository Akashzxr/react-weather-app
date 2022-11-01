import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { latitude, longtitude } from "../redux/reduxslice";
import down from "../assets/pressure-low.svg";
import up from "../assets/pressure-high.svg";
import clouds from "../assets/04d.svg";
import feels from "../assets/feelslike.svg";
import humid from "../assets/humidity.svg";
import rainsvg from "../assets/rain.svg";
import wind from "../assets/wind.svg";
import "../styles/nowdetails.css";
import Togglebtn from "../components/togglebtn";
import Heading from "../components/heading";
import "../styles/App.css"

export default function Nowdetails() {

   const ins = useSelector((state) => state.redux.input);
   const lat = useSelector((state) => state.redux.lat);
   const long = useSelector((state) => state.redux.long);
   const dispatch = useDispatch();

   //const [ins,setins]=useState("kodungallur"); 
   const [day, setday] = useState();
   const [month, setmonth] = useState();
   const [time, settime] = useState();

   const [weather, setweather] = useState();
   const [description, setdescription] = useState();
   const [feelslike, setfeelslike] = useState();
   const [humidity, sethumidity] = useState();
   const [windspeed, setwindspeed] = useState();
   const [rain, setrain] = useState();
   const [icon, seticon] = useState();



   async function getdata() {
      //fetching details
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + ins + '&units=metric&exclude=hourly,minutely&appid=55b2f4b739998d82795ba5cabb50890f', { mode: 'cors' });
      const result = await response.json();

      //getting date from the timezone
      let d = new Date().toLocaleString("en-US", { timeZone: result.timeZone });
      

      //setting day,month and time
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
         "Aug", "Sept", "Oct", "Nov", "Dec"];

      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let curren_date = new Date(d);
      let month = months[curren_date.getMonth()];
      setmonth(month);

      let day = days[curren_date.getDay()];
      setday(day);

      let time = curren_date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      settime(time);

      //setting weather data
      setweather(Math.round(result.main.temp));
      setdescription(result.weather[0].description)
      setfeelslike(result.main.feels_like);
      sethumidity(result.main.humidity);
      setwindspeed(result.wind.speed);
      seticon(result.weather[0].icon);
      if ('rain' in result) {
         setrain(result.rain["1h"]);
      }
      else {
         setrain(0.0);
      }
      
      //setting latitude and longitude
      dispatch(latitude(result.coord.lat));
      dispatch(longtitude(result.coord.lon));
   }

   useEffect(() => {
      getdata();
   }, [ins])

   return (
      <div className="nowdetails">
         <div className="App ">
            <Heading/>
            <Togglebtn/>
         </div>
         <div className="dateandtime">
            <span>{day}</span>
            <span>{month},</span>
            <span>{time}</span>
         </div>

         <div className="weather-details1" >

            <div className="weather">
               <div className="bigweather">{weather}&#8451;</div>

               <div className="small-weather-container">
                  <div className="smallweather1" >
                     <img src={down} />
                     <span>{weather}&#8451;</span>
                  </div>

                  <div className="smallweather2">
                     <span>{weather}&#8451;</span>
                     <img src={up} />
                  </div>
               </div>
            </div>

            <div className="description-container">
               <img src={clouds} className="clouds" />
               <div className="value" >{description}</div>
            </div>
         </div>

         <div className="weather-details2">
            <div className="feelslike">
               <img src={feels} className="details2-icons" />
               <div className="text">
                  <div>Feels Like</div>
                  <div className="value">{feelslike}&#8451;</div>
               </div>
            </div>
            <div className="humidity">
               <img src={humid} className="details2-icons" />
               <div className="text">
                  <div>Humidity</div>
                  <div className="value">{humidity}%</div>
               </div>
            </div>
            <div className="rain">
               <img src={rainsvg} className="details2-icons" />
               <div className="text">
                  <div>Cahnce of rain</div>
                  <div className="value">{rain}%</div>
               </div>
            </div>
            <div className="wind-speed">
               <img src={wind} className="details2-icons" />
               <div className="text">
                  <div>Wind speed</div>
                  <div className="value">{windspeed}Km/h</div>
               </div>
            </div>

         </div>
      </div>
   )
}