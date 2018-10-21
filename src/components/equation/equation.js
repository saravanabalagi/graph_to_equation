import React, {Component} from 'react';

import './equation.css';

class Equation extends Component {

  render() {
    let {equation} = this.props;
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
          equation &&
          <div className='notification is-info'>y = 2x</div>
        }

      </div>
    )
  }
}

export default Equation;
