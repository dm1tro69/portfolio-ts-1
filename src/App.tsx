import React from 'react';
import './App.css';
import Home from "./home/Home";
import About from "./about/About";
import Service from "./service/Service";

const App = () => {
  return (
    <div className={'App'}>
      <Home/>
        <About/>
        <Service/>
    </div>
  );
}

export default App;
