import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import ArticleSin from "./pages/singleArticle/ArticleSin";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/article/:id" element={<ArticleSin/>}/>
      </Routes>


      
    </div>
  );
}





export default App;
