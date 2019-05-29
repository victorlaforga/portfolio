import React from 'react';
import profielfoto from '../images/profielfoto.png';
import cv from '../CV Victor.pdf';
import ReactLogo from '../images/Logos expirience/react.svg';
import CssLogo from '../images/Logos expirience/css-5.svg';
import HtmlLogo from '../images/Logos expirience/html-5.svg';
import MongoLogo from '../images/Logos expirience/mongodb.svg';


class AboutMe extends React.Component {
render() {
return <div>
<h1 className="titel">Who is <strong>Victor?</strong></h1>
<div className="container">

<div className="me">
  
  
  <ul class='info-list'>

    <li>
      <strong>Name: </strong>
      <span>Victor Laforga Kaandorp</span>
    </li>

    <li>
      <strong>Current study: </strong>
      <span> <span>2nd year Bachelor Communication and Multimedia Design student in Amsterdam</span>
      </span>
    </li>

    <li>
      <strong>Age: </strong>
      <span>21 Years</span>
    </li>

    <li>
      <strong>Lived in: </strong>
      <span>Belgium, Guatemala, Nicaragua & the Netherlands </span>
    </li>

    <li>
      <strong>Languages: </strong>
      <span>Dutch, Spanish & English</span>
    </li>



  </ul>

  <img src={profielfoto} alt=""></img>
  </div>
  <div className="description">
  <h3>Litlle bit about me</h3>
  <p> Student living in Haarlem. Desiring to be a T-shaped Front-End developer. I have worked with HTML, CSS, Javascript, React, Node, MongoDB, Express. Working in team projects is something that I like. Currently in an intership @Glue </p>
  <div className="expirienceLogos">
    <h2>Expirience</h2>
    <span><img src={HtmlLogo} alt=""/></span>
    <img src={CssLogo} alt=""/>
    <span><img src={MongoLogo} alt=""/></span>
    <img src={ReactLogo} alt="reactlogo"/>

  </div>
  <a href={cv} download><button className="downloadButton">Download CV</button></a></div>
  
  <div class="containerTimeline">
  <h1>Timeline</h1>
   <div class="content">
   
      <p className="timelineElement">Front-end developer internship at <a href="www.glue.group">Glue</a> <span>&#129311;&#127996;</span><hr/>
      <span><span>&#8987;</span>18-04-2019 - 27-06-2019</span><hr className="showHover"/><span className="showHover">Glue is a creative app, web & platform development agency. We design and build strong digital experiences. We are a one-stop-shop for digital design and development projects. From web and mobile apps to large platforms, we are committed to deliver in-house created and premium quality deliverables. The tree main pillars in our work are: functionality, usability and aesthetics.</span></p>

      
      
      <p className="timelineElement"> Started 2nd year of my study <span>&#129311;&#127996;</span><hr/>
      <span><span>&#8987;</span>18-04-2019 - 27-06-2019</span></p>
      <p className="timelineElement"> Started Communication & Multimedia Design<span>&#129311;&#127996;</span><hr/>
      <span><span>&#8987;</span>01-09-2017 - now</span></p>
      <p className="timelineElement">Immigrated back to the Netherlands 🇳🇱<hr/>
      <span className="date">2012 - now</span><hr className="hr"/><span>2017: <strong>HAVO diploma - Natuur & Gezondheid  </strong></span></p>
      <p className="timelineElement">Immigrated to Nicaragua 🇳🇮<hr/>
      <span className="date">2008 - 2012</span></p>
      <p className="timelineElement">Immigrated to the Netherlands 🇳🇱<hr/>
      <span className="date">2004 - 2008</span></p>
      <p className="timelineElement">Immigrated to Guatemala 🇬🇹 <hr/>
      <span className="date">1999 - 2004</span><hr className="hr"/><span>School: <strong><a href="https://www.cag.edu.gt/" target="_blank">American School of Guatemala </a></strong></span></p>
      <p>Born in Belgium <span>&#128118;&#127995;</span><hr/>
      <span>27-03-1998</span></p>
   </div>
   
</div>
</div>
</div>;
}
}

export default AboutMe;