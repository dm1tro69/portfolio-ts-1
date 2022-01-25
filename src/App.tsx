import React from 'react';
import './App.css';
import Home from "./home/Home";
import About from "./about/About";
import Service from "./service/Service";
import Project from "./project/Project";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div className={'App'}>
      <Home/>
        <About/>
        <Service/>
      <Project/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
