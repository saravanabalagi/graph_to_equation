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
    }

    render() {
        let { paintCanvas } = this;
        return (
            <div className="drawpad">
                <canvas id='paint'/>
                <Button onClick={paintCanvas.clearCanvas} className='light'>Clear</Button>
            </div>
        )
    }
}

export default Drawpad;
