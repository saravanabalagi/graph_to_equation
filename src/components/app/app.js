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
  render() {
    return (
      <div className="app">
        <Navbar/>
          <Columns className="is-fullheight">
            <Column className='is-flex'>
              <Drawpad/>
            </Column>
            <Column className='is-flex'>
              <Equation/>
            </Column>
          </Columns>
      </div>
    );
  }
}

export default App;
