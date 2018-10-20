import React, { Component } from 'react';

import Drawpad from '../graph/drawpad';
import Equation from '../equation/equation';
import Navbar from '../navbar/navbar';
import './app.scss';

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';
import {Column, Columns, Container} from "bloomer";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
        {/*<Container>*/}
          <Columns className="is-fullheight">
            <Column>
              <Drawpad/>
            </Column>
            <Column>
              <Equation/>
            </Column>
          </Columns>
        {/*</Container>*/}
      </div>
    );
  }
}

export default App;
