import React from 'react';
import './App.css';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import MyWork from './Components/MyWork';
import './index.css';
import './animation.css';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
return (
  <Router>


<nav>
  <a href="/">Home</a>
  <a href="/about">About me</a>
  <a href="/mywork">My work</a>
  <a href="/contact">Contact</a>
</nav>

  
  
  
        
        <Route exact path="/mywork" component={MyWork} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about/" component={AboutMe} />
        <Route exact path="/" component={Home} />
        {/* <Footer/>  */}
        
</Router>
);
}

export default App;

