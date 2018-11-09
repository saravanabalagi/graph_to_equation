import {Line} from "./line";

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
