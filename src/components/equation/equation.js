import React, {Component} from 'react';

import './equation.css';

class Equation extends Component {

  render() {
    let {equation, round, updateRound} = this.props;
    return(
      <div className='right-pane'>
        <h2 className='subtitle is-3'>Predicted Equation</h2>
        {
          !equation &&
          <div className='notification is-warning'>
          <span className="icon">
              <i className="fa fa-exclamation-triangle"/>
          </span>
            <span>Not enough points to predict the equation</span>
            <br/>
            <span className="icon">
              <i className="fa fa-lightbulb-o"/>
          </span>
            <span>You can sketch a new graph or continue on the same one &#160; </span>
          </div>
        }
        {
          equation && equation.a && equation.b &&
          <div className='notification is-info'>
            y = {equation.a.toFixed(round)}x
              + {equation.b.toFixed(round)}
            </div>
        }
        <div>
          <input className="slider"
                 onChange={updateRound}
                 step="1" min="0" max="5"
                 defaultValue="2" type="range" />
        </div>
      </div>
    )
  }
}

export default Equation;
