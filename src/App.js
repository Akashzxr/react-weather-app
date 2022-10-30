import Heading from "./components/heading";
import Togglebtn from "./components/togglebtn";
import Now from "./pages/now";
import "./styles/App.css";

function App() {
  return (
    <div className="App ">
       <Heading/>
       <Togglebtn/>
       <Now/>
    </div>
  );
}

export default App;
