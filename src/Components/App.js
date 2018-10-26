import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  
  render() {
    return (

        <div className="main">
          <h1 className="title">Happy Birthday Suresh!!!</h1>
          <div className="grid-container">
            <iframe className="grid-item" align="center" width="560" height="315" src="https://www.youtube.com/embed/0CPJ-AbCsT8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>

    )
  }

}



export default App;
