d3.xml("/assets/posts/sweden/map.svg")
  .then(data => {
    d3.select("#map").node().append(data.documentElement)
  });

var svg = d3.select("#map")
    .append("svg")
    .attr("style", "solid 1px black")
    .attr("width", "100%");

var g = svg.append("g");
d3.json("/assets/posts/sweden/map.svg", function (error, json) {
    g.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .style("fill", "red");
});
