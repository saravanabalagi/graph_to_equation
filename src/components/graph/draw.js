const canvasHeight = 250;
const canvasWidth = 250;

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

    canvasCtx.lineWidth = 5;
    canvasCtx.lineJoin = 'round';
    canvasCtx.lineCap = 'round';
    canvasCtx.strokeStyle = 'blue';

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

      this.points.push(this.convertPoint(mouse));
      canvasCtx.stroke();
    }
  }

  convertPoint = ({x, y}) => {
    return ({
      x: x - canvasWidth / 2,
      y: -(y - canvasHeight / 2)
    });
  };

  setupScale() {
    this.scale = document.querySelector('#scale');
    this.scaleCtx = this.scale.getContext('2d');

    let {scaleCtx, scale} = this;

    scaleCtx.canvas.height = canvasHeight;
    scaleCtx.canvas.width = canvasWidth;

    scaleCtx.lineWidth = 1;
    scaleCtx.strokeStyle = '#00000011';

    this.drawScale({x: 0, y: canvasHeight / 2}, {x: canvasWidth, y: canvasHeight / 2});
    this.drawScale({x: canvasWidth / 2, y: 0}, {x: canvasWidth / 2, y: canvasHeight});
  }

  drawScale = (start, end) => {
    let { scaleCtx } = this;
    scaleCtx.beginPath();
    scaleCtx.moveTo(start.x, start.y);
    scaleCtx.lineTo(end.x, end.y);
    scaleCtx.closePath();
    scaleCtx.stroke();
  }

}
