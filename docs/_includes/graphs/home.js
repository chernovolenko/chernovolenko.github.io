var svg = d3.select("#map")
    .append("svg")
    .attr("style", "solid 1px black")
    .attr("width", "100%");

var g = svg.append("g");
d3.json("map.svg", function (error, json) {
    g.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .style("fill", "red");
});
