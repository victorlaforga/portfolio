import React from 'react';
import '../index.css';
import '../animation.css'
import linkedinLogo from '../images/logo-linkedin.png'
import githubLogo from '../images/icongithub.svg'


class Home extends React.Component {
    render() {
      return <div className="home">
      <div className="whiteSide">
          <h1 className="slide-right">Victor</h1>
          <a href="https://github.com/victorlaforga" target="_blank" rel="noopener"><img className="logo" id="bounce-top" src={githubLogo} alt="github-logo"/></a>
        {/* <p>Copyright Victor Laforga</p> */}
      </div>
        
      <div className="blackSide">
     
      
          <h1 className="slide-left">Laforga</h1>
          
          <a href="https://www.linkedin.com/in/victor-laforga-1854b5140/" target="_blank" rel="noopener noreferrer"><img className="logo" id="bounce-top2" src={linkedinLogo} alt="linkedin-logo"/></a>
          
          
      </div>
   
      </div>;

      
    }
  }


  export default Home;