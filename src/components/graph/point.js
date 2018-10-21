import {canvasHeight, canvasWidth} from "./draw";

export class Point {
  constructor(x,y, convert=false) {
    if(convert) {
      this.x = x - canvasWidth / 2;
      this.y = -(y - canvasHeight / 2);
    } else {
      this.x = x;
      this.y = y;
    }
  }
  convertToCanvasPoint() {
    let {x, y} = this;
    this.x = x + canvasWidth / 2;
    this.y = -(y - canvasHeight / 2);
    return this;
  };

  distanceFrom(a,b) {
    let {x,y} = this;
    let dist = y - (a*x + b);
    return dist * dist;
  }
}

export function predictEquation(points) {
  console.log({points});
  let a = 0;
  let b = 0;
  let loss = points.reduce((loss, point) => {
    console.log(point, point.distanceFrom(a, b));
    loss += point.distanceFrom(a, b);
    return loss;
  }, 0);
  let learningRate = 0.01;
  let dJda = points.reduce((dJda, point) => {
    return dJda + point.x;
  }, 0);
  let dJdb = points.reduce((dJda, point) => {
    return dJda + 1;
  }, 0);
  a = a - learningRate * dJda;
  b = b - learningRate * dJdb;
  let newLoss = points.reduce((loss, point) => {
    console.log(point, point.distanceFrom(a, b));
    loss += point.distanceFrom(a, b);
    return loss;
  }, 0);
  return {loss, newLoss, a, b};
}
