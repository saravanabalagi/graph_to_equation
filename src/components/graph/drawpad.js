import React, { Component } from 'react';
import {PaintCanvas} from './draw';
import {Button} from "bloomer";

import './drawpad.css';

class Drawpad extends Component {

    constructor(props) {
      super(props);
      this.paintCanvas = new PaintCanvas();
      this.state = {
        autoClear: true
      }
    }

    componentDidMount() {
      let { paintCanvas } = this;
      paintCanvas.setupCanvas();
      paintCanvas.setupScale();
    }

  handleAutoClearChange = () => {
    this.setState({autoClear: !this.state.autoClear});
  };

    render() {
        let { paintCanvas } = this;
        let { autoClear } = this.state;
        return (
          <div className='left-pane'>
            <div className='drawpad-wrapper'>
              <div className='drawpad'>
                <canvas id='paint'/>
                <canvas id='scale'/>
              </div>
              <div className='tools'>
                <div className="field auto-clear-wrapper">
                  <input className="is-checkradio is-success"
                         id="autoClearCheckBoz"
                         type="checkbox"
                         onClick={this.handleAutoClearChange}
                         checked={autoClear} />
                  <label htmlFor="autoClearCheckBoz">Auto Clear</label>
                </div>
                { !autoClear && <Button onClick={paintCanvas.clearCanvas} className='light is-warning'>Clear</Button> }
              </div>
            </div>
          </div>
        )
    }
}

export default Drawpad;
