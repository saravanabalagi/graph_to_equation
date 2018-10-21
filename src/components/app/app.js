import React, { Component } from 'react';

import Drawpad from '../graph/drawpad';
import Equation from '../equation/equation';
import Navbar from '../navbar/navbar';

import './app.css';
import 'src/assets/bulma-extensions.min.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';
import {Column, Columns} from "bloomer";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      equation: null
    }
  }

  updateEquation = (equation) => {
    console.log('equation updated', equation);
    this.setState({equation: equation});
  };

  render() {
    let {equation} = this.state;
    let {updateEquation} = this;
    return (
      <div className="app">
        <Navbar/>
          <Columns className="is-fullheight">
            <Column className='is-flex'>
              <Drawpad updateEquation={updateEquation}/>
            </Column>
            <Column className='is-flex'>
              <Equation equation={equation}/>
            </Column>
          </Columns>
      </div>
    );
  }
}

export default App;
