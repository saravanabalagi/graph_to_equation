import {canvasHeight, canvasWidth} from "./draw";
import {Line} from "./line";

export class Point {
  constructor(x,y, convert=false) {
    if(convert) {
      this.x = (x - canvasWidth / 2) / (canvasWidth/10);
      this.y = (-(y - canvasHeight / 2)) / (canvasHeight/10);
    } else {
      this.x = x;
      this.y = y;
    }
  }
  convertToCanvasPoint() {
    let {x, y} = this;
    this.x = ( x + canvasWidth / 2 );
    this.y = ( -(y - canvasHeight / 2) );
    return this;
  };

  distanceFrom(a,b) {
    let {x,y} = this;
    let dist = y - (a*x + b);
    return dist * dist;
  }

  getSlope({x,y}) {
    let epsilon = 0.001;
    return (y - this.y)/((x - this.x) + epsilon)
  }
}

export function predictEquation(points) {
  // console.log({points});

  let line = new Line();
  if(points<2) return line;

  line.getEquationFrom(points[0], points[1]);

  let initialLoss = line.getLoss(points);
  let previousLoss = initialLoss;
  let loss = 9999;

  for(let iterations=0; Math.abs(previousLoss-loss)>0.01; iterations++) {
    previousLoss = loss;
    loss = line.getLoss(points);
    let {a, b} = line;

    let learningRate = 0.1 / points.length;
    let dJda = points.reduce((dJda, {x,y}) => {
      let current_dJda = (y - (a*x+b))*(-1)*(x);
      return dJda + current_dJda;
    }, 0);
    let dJdb = points.reduce((dJda, {x,y}) => {
      let current_dJda = (y - (a*x+b))*(-1)*(1);
      return dJda + current_dJda;
    }, 0);

    console.log({previousLoss, loss, dJda, dJdb});

    line.a = a - learningRate * dJda;
    line.b = b - learningRate * dJdb;
  }


  let finalLoss = line.getLoss(points);
  console.log({initialLoss, finalLoss});

  return line;

}
