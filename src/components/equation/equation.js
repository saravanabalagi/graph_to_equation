import React, {Component} from 'react';

import './equation.css';

class Equation extends Component {
  render() {
    return(
      <div className='right-pane'>
        <h2 className='subtitle is-3'>Predicted Equation</h2>
        <div className='notification is-info'>y = 2x</div>
      </div>
    )
  }
}

export default Equation;
