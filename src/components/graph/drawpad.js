import React, { Component } from 'react';
import { setupCanvas, clearCanvas } from './draw';
import {Button} from "bloomer";

import './drawpad.css';

class Drawpad extends Component {

    componentDidMount() {
        setupCanvas();
    }

    render() {
        return (
            <div className="drawpad">
                <canvas id='paint' width={250} height={250}/>
                <Button onClick={clearCanvas} className='light'>Clear</Button>
            </div>
        )
    }
}

export default Drawpad;
