import React, { Component } from 'react';

import Drawpad from '../graph/drawpad';
import Navbar from '../navbar/navbar';
import './app.scss';

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        <Drawpad/>
      </div>
    );
  }
}

export default App;
