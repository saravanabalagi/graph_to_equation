import React, { Component } from 'react';
import { setupCanvas } from './draw';

class Drawpad extends Component {

    componentDidMount() {
        setupCanvas();
    }

    render() {
        return (
            <canvas id='paint' width={250} height={250}/>
        )
    }
}

export default Drawpad;