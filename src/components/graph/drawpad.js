import React, { Component } from 'react';
import {PaintCanvas} from './draw';
import {Button} from "bloomer";

import './drawpad.css';

class Drawpad extends Component {

    constructor(props) {
      super(props);
      this.paintCanvas = new PaintCanvas();
    }

    componentDidMount() {
      let { paintCanvas } = this;
      paintCanvas.setupCanvas();
      paintCanvas.setupScale();
    }

    render() {
        let { paintCanvas } = this;
        return (
          <div className='left-pane'>
            <div className='drawpad-wrapper'>
              <div className='drawpad'>
                <canvas id='paint'/>
                <canvas id='scale'/>
              </div>
              <div className='tools'>
                <div className="field">
                  <input className="is-checkradio is-success" id="exampleCheckboxSuccess" type="checkbox"
                         name="exampleCheckboxSuccess" checked="checked" />
                  <label htmlFor="exampleCheckboxSuccess">Auto Clear</label>
                </div>
                <Button onClick={paintCanvas.clearCanvas} className='light is-warning'>Clear</Button>
              </div>
            </div>
          </div>
        )
    }
}

export default Drawpad;
