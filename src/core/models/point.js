import {canvasHeight, canvasWidth} from "./canvas";
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
