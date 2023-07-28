import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}



function Footer(){
  return(
    <div>
      <h3>footer</h3>
    </div>
  );
}

export default App;
