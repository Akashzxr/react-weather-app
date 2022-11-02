import React, { useState } from "react";
import "../styles/App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { input } from "../redux/reduxslice";
export default function Heading(){
    
    const dispatch = useDispatch();
    const inputvalue = useSelector((state)=>state.redux.input);
    const clickdata =useSelector((state)=>state.redux.click);

    const [searchclick,setsearchclick] = useState(false);

    const search=()=>{
        if(searchclick){
            setsearchclick(false);
        }
        else{
            setsearchclick(true);
        }
    }

    const getinput=(event)=>{
        const value=event.target.value;
        if(event.key==="Enter"){
            dispatch(input(value));
            search();
        }
    }

    return(
        <div className="heading">
           <p style={{display: searchclick?'none':'block'}} className="place">{inputvalue}</p>
           <input onKeyDown={getinput} placeholder="Type the cityname" style={{display: searchclick?'block':'none'}} type={"text"} className="search-box"/>
           <button onClick={search} style={{display: searchclick?'block':'none'}} className="close-btn">x</button>
           <div className="btn-sec">
              <button onClick={search} style={{display: searchclick?'none':'block',visibility: clickdata?'visible':'hidden'}} className="searchbtn fa fa-search"></button>
              <button style={{visibility: clickdata?'visible':'hidden'}} className="degreebtn">&#8451;</button>
           </div>
          
        </div>
    )
}