var svg = d3.select('#triangle').append('svg')
  .attr('width', '100%')
  .attr('height', 300);

var triangleData = [
  {'x': 0, 'y': 150},
  {'x': 200, 'y': 150},
  {'x': 200, 'y': 0},
  {'x': 0, 'y': 150},
];

var triGen = d3.svg.line()
                .x(function(d) { return d.x; })
                .y(function(d) { return d.y; })
                .interpolate('linear');

var triangleDraw = svg.append('path')
                      .attr('d', triGen(triangleData))
                      .attr('stroke', 'black')
                      .attr('stroke-width', 1)
                      .attr('fill', 'gray');