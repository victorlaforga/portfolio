import React from 'react';
import '../animation.css';
import '../index.css';

class Contact extends React.Component {
    render() {
      return <div>
      
      <h1>Contact</h1>
      <form method="post" action="emailscript.php">
        <fieldset>
        <label htmlFor="">Name:</label>
      <input type="text"/>
      <label htmlFor="">Subject:</label>
      <input type="text"/>
      <label htmlFor="">Text:</label>
      <input type="textare"/>
      
      <input type="submit"/>
        </fieldset>
      </form>
      </div>
      
      ;
    }
  }

  export default Contact;