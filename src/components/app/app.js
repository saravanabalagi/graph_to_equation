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
      equation: null,
      round: 2,
    }
  }

  updateEquation = (equation) => {
    console.log('equation updated', equation);
    this.setState({equation});
  };

  updateRound = (e) => {
    let round = parseInt(e.currentTarget.value);
    this.setState({round});
  };

  render() {
    let {equation, round} = this.state;
    let {updateEquation, updateRound} = this;
    return (
      <div className="app">
        <Navbar/>
          <Columns className="is-fullheight">
            <Column className='is-flex'>
              <Drawpad updateEquation={updateEquation}
                       equation={equation}
                       round={round}/>
            </Column>
            <Column className='is-flex'>
              <Equation equation={equation}
                        round={round}
                        updateRound={updateRound}/>
            </Column>
          </Columns>
      </div>
    );
  }
}

export default App;
