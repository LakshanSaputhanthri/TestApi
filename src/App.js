import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import React from "react";
import TitleBar from "./components/titlebar/TitleBar";


function App() {

 
  return (
    <div className="App">
      
      <TitleBar/>
      <Main theme="light" />
      <Footer theme="light" />
    </div>
  );
}

export default App;
