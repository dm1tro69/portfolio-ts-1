import React from 'react';
import './App.css';
import Home from "./home/Home";
import About from "./about/About";

const App = () => {
  return (
    <div className={'App'}>
      <Home/>
        <About/>
    </div>
  );
}

export default App;
