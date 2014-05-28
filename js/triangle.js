var svg = d3.select('#triangle').append('svg')
  .attr('width', '100%')
  .attr('height', 300);

var triData = function(xs, ys, hs) {
  if (xs > hs) {
    xs = hs;
  }
  return [
    {'x': 0, 'y': hs},
    {'x': xs, 'y': hs},
    {'x': xs, 'y': hs - ys},
    {'x': 0, 'y': hs},
  ];
};

var triGen = d3.svg.line()
                .x(function(d) { return d.x; })
                .y(function(d) { return d.y; })
                .interpolate('linear');

var triangleDraw = svg.append('path')
                      .attr('d', triGen(triData(100, 173, 200)))
                      .attr('stroke', 'black')
                      .attr('stroke-width', 1)
                      .attr('fill', 'white');

var triTangle = new Tangle(document.getElementById("triangle-ctrl"), {
  initialize: function() {
    this.xside = 100;
    this.hyp = 200;
  },
  update: function() {
    this.yside = Math.round(Math.sqrt(this.hyp * this.hyp - this.xside * this.xside));
    d3.select('#triangle path').attr('d', triGen(triData(this.xside, this.yside, this.hyp)));
  }
});



var drag = d3.behavior.drag().on('drag', function() {
  hypPoint.attr('cx', d3.event.x);
  hypPoint.attr('cy', d3.event.y);
});

drag.call(hypPoint);
