import Heading from "./components/heading";
import Togglebtn from "./components/togglebtn";
import { useSelector } from "react-redux";
import Nowdetails from "./pages/nowdetails";
import Hourlydetails from "./pages/hourdetails";
import "./styles/App.css";


function App() {
    
  const clickdata = useSelector((state)=>state.redux.click)

  return (
    <div className="App ">
       <Heading/>
       <Togglebtn/>
       {clickdata===true ?<Nowdetails/>:<Hourlydetails/>}
    </div>
  );
}

export default App;
