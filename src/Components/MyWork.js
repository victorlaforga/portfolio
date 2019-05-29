import React from 'react';
import '../index.css';
import profielfoto from '../images/profielfoto.png';
import muze from '../images/mockup-muze.jpg';
import datingapp from '../images/dating-app.png';
import kerstbomen from '../images/kerstbomen.png';
import ucd from '../images/koffieucd.png';
import oba from '../images/obamobile.png'

class MyWork extends React.Component {
    render() {
      return <div className="title">
      <h1>My <strong>works</strong></h1>
      
      <div id="container">
        <div className="projectElement">
        <div className="image">
          <img src={muze} alt=""/>
          </div>
          <div className="info">
          <h2>Muze</h2>
          </div>
          <div className="tags">
  <p>#Back-end</p>
  <p>#TeamProject</p>
  <p>#Front-end</p>
  <p>#Node.js</p>
  <p>#SASS</p>
  <p>#MongoDB</p>
  </div>
        </div>
        <div className="projectElement">
        <div className="image">
          <img src={datingapp} alt=""/>
          </div>
          <div className="info">
          <h2>Dating4 <br/> Two</h2>
          </div>
          <div className="tags">
  <p>#Back-end</p>
  <p>#Express</p>
  <p>#Node.js</p>
  <p>#NPM</p>
  <p>#MongoDB</p>
  </div>
        </div>
        <div className="projectElement">
        <div className="image">
          <img src={kerstbomen} alt=""/>
          </div>
          <div className="info">
          <h2>Groene <br/> Kerst</h2>
          </div>
          <div className="tags">
          <p>#HCI</p>
  <p>#UX/UI</p>
  <p>#Design</p>
  <p>#Illustrator</p>
  <p>#Interaction</p>
  </div>
        </div>
        <div className="projectElement">
        <div className="image">
          <img src={ucd} alt=""/>
          </div>
          <div className="info">
          <h2>Maas</h2>
          
          </div>
          <div className="tags">
          <p>#UCD</p>
  <p>#UX/UI</p>
  <p>#Design</p>
  <p>#Illustrator</p>
  <p>#Interaction</p>
  <p>#User</p>
  </div>
        </div>
        <div className="projectElement">
        <div className="image">
          <img src={oba} alt=""/>
          </div>
          <div className="info">
          <h2>Muze</h2>
        
          </div>
          <div className="tags">
          <p>#HCI</p>
  <p>#UX/UI</p>
  <p>#Design</p>
  <p>#Illustrator</p>
  <p>#Interaction</p>
  </div>
        </div>
        </div>
      </div>;
    }
  }

  export default MyWork;


  