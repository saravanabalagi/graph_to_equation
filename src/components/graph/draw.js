const canvasHeight = 500;
const canvasWidth = 500;

export class PaintCanvas {

  constructor() {
    this.canvas = null;
    this.canvasCtx = null;

    this.scale = null;
    this.scaleCtx = null;

    this.points = [];

    this.mouse = {x: 0, y: 0};
    this.lastMouse = {x: 0, y: 0};
  }

  clearCanvas = () => {
    console.log(this.points);
    this.points = [];
    let {canvasCtx, canvas} = this;
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  };

  setupCanvas() {
    this.canvas = document.querySelector('#paint');
    this.canvasCtx = this.canvas.getContext('2d');

    let {canvasCtx, canvas, mouse, lastMouse} = this;

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
      canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', () => {canvas.removeEventListener('mousemove', onPaint, false)}, false);
    canvas.addEventListener('mouseout', () => {canvas.removeEventListener('mousemove', onPaint, false)}, false);

    let onPaint = () => {
      canvasCtx.beginPath();
      canvasCtx.moveTo(lastMouse.x, lastMouse.y);
      canvasCtx.lineTo(mouse.x, mouse.y);
      canvasCtx.closePath();

      this.points.push(this.convertToGraphPoint(mouse));
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

    // draw grid
    for(let i=-4; i<=4; i++) drawScaleLine({x: 0, y: i*canvasHeight/10 + canvasHeight / 2}, {x: canvasWidth, y: i*canvasHeight/10 + canvasHeight / 2});
    for(let j=-4; j<=4; j++) drawScaleLine({x: j*canvasWidth/10 + canvasWidth / 2, y: 0}, {x: j*canvasWidth/10 + canvasWidth / 2, y: canvasHeight});

    // x-axis scale
    let xOffset = 12;
    let yOffset = -2.5;
    for(let i=-5; i<=5; i++) {
      let {x, y} = this.convertToCanvasPoint({x: i+ i*canvasWidth/11, y: 0});
      scaleCtx.fillText(String(i), x + yOffset, y + xOffset);
    }

    // y-axis scale
    xOffset = 4;
    yOffset = 4;
    for(let j=-5; j<=5; j++) {
      if(j===0) continue;
      let {x, y} = this.convertToCanvasPoint({x: 0, y: j+ j*canvasHeight/11});
      scaleCtx.fillText(String(j), x + yOffset, y + xOffset);
    }


  }

  convertToGraphPoint = ({x, y}) => {
    return ({
      x: x - canvasWidth / 2,
      y: -(y - canvasHeight / 2)
    });
  };

  convertToCanvasPoint = ({x, y}) => {
    return ({
      x: x + canvasWidth / 2,
      y: -(y - canvasHeight / 2)
    });
  };


}
