import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>


      
    </div>
  );
}





export default App;
