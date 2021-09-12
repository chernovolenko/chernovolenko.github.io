d3.xml("assets/posts/sweden/map.svg")
  .then(data => {
    d3.select("#map").node().append(data.documentElement)
  });
