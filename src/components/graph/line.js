export class Line {
  constructor(a, b) {
    this.a = a;
    this.b = b
  }

  getLoss(points) {
    let {a,b} = this;
    let loss = points.reduce((loss, point) => {
      console.log(point, point.distanceFrom(a, b));
      loss += point.distanceFrom(a, b);
      return loss;
    }, 0);
    return loss;
  }
}
