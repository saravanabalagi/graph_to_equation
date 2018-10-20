export function setupCanvas() {

    let canvas = document.querySelector('#paint');
    let ctx = canvas.getContext('2d');

    let mouse = {x: 0, y: 0};
    let last_mouse = {x: 0, y: 0};

    /* Mouse Capturing Work */
    canvas.addEventListener('mousemove', function(e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
    }, false);


    /* Drawing on Paint App */
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'blue';

    canvas.addEventListener('mousedown', function(e) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);

    canvas.addEventListener('mouseout', function () {
        canvas.removeEventListener('mousemove', onPaint, false);
    });

    let onPaint = function() {
        ctx.beginPath();
        ctx.moveTo(last_mouse.x, last_mouse.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.closePath();
        ctx.stroke();
    }
}

export function clearCanvas() {

    let canvas = document.querySelector('#paint');
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}