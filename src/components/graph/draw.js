const canvasHeight = 250;
const canvasWidth = 250;

export class PaintCanvas {

  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.points = [];

    this.mouse = {x: 0, y: 0};
    this.lastMouse = {x: 0, y: 0};
  }

  clearCanvas = () => {
    console.log(this.points);
    this.points = [];
    let {ctx, canvas} = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  setupCanvas() {
    this.canvas = document.querySelector('#paint');
    this.ctx = this.canvas.getContext('2d');

    let {ctx, canvas, mouse, lastMouse} = this;

    ctx.canvas.height = canvasHeight;
    ctx.canvas.width = canvasWidth;

    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'blue';

    canvas.addEventListener('mousemove', function(e) {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    canvas.addEventListener('mousedown', () => {
      this.clearCanvas();
      canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', () => {canvas.removeEventListener('mousemove', onPaint, false)}, false);
    canvas.addEventListener('mouseout', () => {canvas.removeEventListener('mousemove', onPaint, false)}, false);

    let onPaint = () => {
      ctx.beginPath();
      ctx.moveTo(lastMouse.x, lastMouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();

      this.points.push(this.convertPoint(mouse));
      ctx.stroke();
    }
  }

  convertPoint = ({x,y}) => {
    return ({
      x: x - canvasWidth/2,
      y: - ( y - canvasHeight/2 )
    });
  }

}
