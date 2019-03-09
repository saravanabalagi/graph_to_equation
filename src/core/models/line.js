export class Line {
  constructor(a=0, b=0) {
    this.a = a;
    this.b = b
  }

  getEquationFrom(pointStart, pointEnd) {
    this.a = pointStart.getSlope(pointEnd);
    this.b = pointStart.y - (this.a * pointStart.x);
  }

  getLoss(points) {
    let {a,b} = this;
    let loss = points.reduce((loss, point) => {
      loss += point.distanceFrom(a, b);
      return loss;
    }, 0);
    return loss;
  }
}
