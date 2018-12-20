import {Point} from "./point";
import {predictEquation} from "../actions/predictEquation";

export const canvasHeight = 500;
export const canvasWidth = 500;

export class PaintCanvas {

  constructor() {
    this.canvas = null;
    this.canvasCtx = null;

    this.scale = null;
    this.scaleCtx = null;

    this.result = null;
    this.resultCtx = null;

    this.points = [];

    this.mouse = new Point(0, 0);
    this.lastMouse = new Point(0, 0);
    this.isMouseDown = false;
  }

  clearCanvas = () => {
    this.points = [];
    let {canvasCtx, canvas} = this;
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  };

  setupCanvas(callback) {

    this.canvas = document.querySelector('#paint');
    this.canvasCtx = this.canvas.getContext('2d');

    let {canvasCtx, canvas, mouse, lastMouse, isMouseDown} = this;

    canvasCtx.canvas.height = canvasHeight;
    canvasCtx.canvas.width = canvasWidth;

    canvasCtx.lineWidth = 7;
    canvasCtx.lineJoin = 'round';
    canvasCtx.lineCap = 'round';
    canvasCtx.strokeStyle = '#FF000055';

    canvas.addEventListener('mousemove', function(e) {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.pageX - this.offsetLeft - this.offsetParent.offsetLeft;
      mouse.y = e.pageY - this.offsetTop - this.offsetParent.offsetTop;
    }, false);

    canvas.addEventListener('mousedown', () => {
      this.clearCanvas();
      isMouseDown = true;
      canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', () => {endStroke()}, false);
    canvas.addEventListener('mouseout', () => {endStroke()}, false);

    let endStroke = () => {
      if(isMouseDown) {
        callback(predictEquation(this.points));
        isMouseDown = false;
      }
    };

    let onPaint = () => {
      if(!isMouseDown) return;
      canvasCtx.beginPath();
      canvasCtx.moveTo(lastMouse.x, lastMouse.y);
      canvasCtx.lineTo(mouse.x, mouse.y);
      canvasCtx.closePath();

      this.points.push(new Point(mouse.x, mouse.y, true));
      canvasCtx.stroke();
    }
  }


  setupScale() {
    this.scale = document.querySelector('#scale');
    this.scaleCtx = this.scale.getContext('2d');

    let {scaleCtx} = this;

    scaleCtx.canvas.height = canvasHeight;
    scaleCtx.canvas.width = canvasWidth;

    scaleCtx.lineWidth = 1;
    scaleCtx.strokeStyle = '#00000011';
    scaleCtx.fillStyle = '#00000066';

    let drawScaleLine = (start, end) => {
      let { scaleCtx } = this;
      scaleCtx.beginPath();
      scaleCtx.moveTo(start.x, start.y);
      scaleCtx.lineTo(end.x, end.y);
      scaleCtx.closePath();
      scaleCtx.stroke();
    };

    // draw axes
    drawScaleLine({x: 0, y: canvasHeight / 2}, {x: canvasWidth, y: canvasHeight / 2});
    drawScaleLine({x: canvasWidth / 2, y: 0}, {x: canvasWidth / 2, y: canvasHeight});

    console.log('axes lines', {x: 0, y: canvasHeight / 2}, {x: canvasWidth, y: canvasHeight / 2});

    // draw grid
    for(let i=-4; i<=4; i++) drawScaleLine({x: 0, y: i*canvasHeight/10 + canvasHeight / 2}, {x: canvasWidth, y: i*canvasHeight/10 + canvasHeight / 2});
    for(let j=-4; j<=4; j++) drawScaleLine({x: j*canvasWidth/10 + canvasWidth / 2, y: 0}, {x: j*canvasWidth/10 + canvasWidth / 2, y: canvasHeight});

    // x-axis scale
    let xOffset = 12;
    let yOffset = 3;
    for(let i=-5; i<=5; i++) {
      let {x, y} = new Point(i+ i*canvasWidth/10, 0).convertToCanvasPoint();
      scaleCtx.fillText(String(i), x + yOffset, y + xOffset);
    }

    // y-axis scale
    xOffset = 12;
    yOffset = 4;
    for(let j=-5; j<=5; j++) {
      if(j===0) continue;
      let {x, y} = new Point(0,j+ j*canvasHeight/10).convertToCanvasPoint();
      scaleCtx.fillText(String(j), x + yOffset, y + xOffset);
    }

  }

  drawEquation({a,b}) {
    this.result = document.querySelector('#result');
    this.resultCtx = this.result.getContext('2d');

    let {resultCtx} = this;

    resultCtx.canvas.height = canvasHeight;
    resultCtx.canvas.width = canvasWidth;

    resultCtx.lineWidth = 1;
    resultCtx.strokeStyle = '#0000FF66';

    let drawResultLine = (start, end) => {
      let { resultCtx } = this;
      resultCtx.beginPath();
      resultCtx.moveTo(start.x, start.y);
      resultCtx.lineTo(end.x, end.y);
      resultCtx.closePath();
      resultCtx.stroke();
    };

    let x1 = -canvasWidth/2;
    let x2 = canvasWidth/2;
    let leftPoint = new Point(x1, a*x1+b*50).convertToCanvasPoint();
    let rightPoint = new Point(x2, a*x2+b*50).convertToCanvasPoint();
    drawResultLine(leftPoint, rightPoint);
    console.log(leftPoint, rightPoint);
  }

}
