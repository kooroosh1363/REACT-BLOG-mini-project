import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import ArticleSin from "./pages/singleArticle/ArticleSin";
import NewArticles from "./pages/NewArticles/NewArticles";
import NotFound from "./pages/404page/notFound";



function App() {
  return (
    <div>

      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/article/:id" element={<ArticleSin/>}/> 
        <Route path="/NewArticles" element={<NewArticles/>}/>
      </Routes>


      
    </div>
  );
}





export default App;
