var svg = d3
  .select("#map")
  .append("svg")
  .attr("width", "100%");
var group = svg.append("g");

d3.json("/assets/posts/sweden/sweden-counties.geojson", function (error, json) {
    g.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .style("fill", "red");
});
