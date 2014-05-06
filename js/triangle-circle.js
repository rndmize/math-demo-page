var mainCanvas = document.getElementById('mainCanvas');
var mainCtx = mainCanvas.getContext('2d');

var drawGraph = function(canvas, ctx){
  var canvasWidth = mainCanvas.width;
  var canvasHeight = mainCanvas.height;

  // Vertical line
  ctx.moveTo(canvasWidth / 2, 0);
  ctx.lineTo(canvasWidth / 2, canvasHeight);
  ctx.stroke();

  // Horizontal line
  ctx.moveTo(0, canvasWidth / 2);
  ctx.lineTo(canvasHeight, canvasWidth / 2);
  ctx.stroke();
}

var clearCanvas = function(canvas, ctx) {
  ctx.fillStyle = "FFFFFF";
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
}

var drawTriangle = function(canvas, ctx, p1, p2, p3) {
  ctx.fillStyle = "000000";
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.lineTo(p3.x, p3.y);
  ctx.lineTo(p1.x, p1.y);
  ctx.stroke();
}

var calcTriangle = function() {
};

var drawSliderTriangle = function(canvas, ctx) {
  var sizeSliderValue = parseFloat(document.getElementById('sizeSlider').value);
  ctx.fillStyle = "000000";
  var triangle = {
    p1: {
      x:mainCanvas.width/2,
      y:mainCanvas.height/2
    },
    p2: {
      x:mainCanvas.width/2 + sizeSliderValue,
      y:mainCanvas.height/2 + sizeSliderValue
    },
    p3: {
      x:mainCanvas.width/2,
      y:mainCanvas.height/2 + sizeSliderValue
    }
  };
  drawTriangle(canvas, ctx, triangle.p1, triangle.p2, triangle.p3);
}

var drawSliderCircle = function(canvas, ctx) {
  var sizeSliderValue = document.getElementById('sizeSlider').value;
  ctx.fillStyle = "000000";
  ctx.moveTo(canvas.width/2, canvas.height/2);
  ctx.beginPath();
  ctx.arc(canvas.width/2,canvas.height/2,sizeSliderValue,0,2*Math.PI);
  ctx.stroke();
}

var drawUpdateFrame = function() {
  clearCanvas(mainCanvas, mainCtx);
  drawGraph(mainCanvas, mainCtx);
  drawSliderCircle(mainCanvas, mainCtx);
  drawSliderTriangle(mainCanvas, mainCtx);
}

var sizeSlider = document.getElementById('sizeSlider');
sizeSlider.oninput = function(){
  drawUpdateFrame();
};

// init
drawUpdateFrame();
