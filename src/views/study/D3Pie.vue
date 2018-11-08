<template>
    <div id="line">
        <div>
            <svg width="960" height="500"></svg>
        </div>
    </div>
</template>

<script>
    import * as d3 from 'd3'
    export default {
        name: 'pie',
        data(){
            return{}
        },
        mounted(){
            var svg = d3.select("svg"),
                width = +svg.attr("width"),
                height = +svg.attr("height"),
                radius = Math.min(width, height) / 2.1,
                g = svg.append("g").attr("transform", "translate(" + width / 1.8 + "," + ((height / 2) + 10) + ")");


            var color = d3.scaleOrdinal(d3.schemeCategory20);

            var pie = d3.pie()
                .sort(null)
                .value(function(d) { return d.Population; });

            var path = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            var label = d3.arc()
                .outerRadius(radius + 10)
                .innerRadius(radius + 10);

// NEW: Title
            svg.append("text")
                .attr("transform", "translate(20,30)")
                .attr("font-size", "1.8em")
                .text("Maryland Population by Race");

// NEW: Source
            svg.append('text')
                .attr('x', width / 5)
                .attr('y', "30em")
                .style('font-size', '1em')
                .style('text-anchor', 'middle')
                .text('Source : ACS 2011-2015')

            var url = "https://raw.githubusercontent.com/MTClass/Project_Graphs/master/Race.csv"

            d3.csv(url, function(d) {
                d.percent = +d.percent;
                return d;
            }, function(error, data) {
                if (error) throw error;

                var arc = g.selectAll(".arc")
                    .data(pie(data))
                    .enter().append("g")
                    .attr("class", "arc");

                arc.append("path")
                    .attr("d", path)
                    .attr("fill", function(d) { return color(d.data.Race); });

                var label = d3.arc()
                    .outerRadius(radius -10)
                    .innerRadius(radius - 40);


                g.selectAll("text").data(pie(data))
                    .enter().append("text")
                    .attr("class", "label")
                    .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
                    .attr("dy", "0.35em")
                    .text(function(d) { return (1*d.data.Population).toPrecision(); });



                // Setup legend
                var legendDotSize = 30;
                var legendWrapper = svg.append("g")
                    .attr("class", "legend")
                    .attr("transform", function(d) { return "translate(20,110)"; })

                // The text of the legend
                var legendText = legendWrapper.selectAll("text")
                    .data(data);

                legendText.enter().append("text")
                    .attr("y", function(d, i) { return i * legendDotSize + 12; })
                    .attr("x", 20)
                    .merge(legendText)
                    .text(function(d) {
                        return d.Race;
                    });

                legendText.exit().remove();

                // The dots of the legend
                var legendDot = legendWrapper.selectAll("rect")
                    .data(data);

                legendDot.enter().append("rect")
                    .attr("y", function(d, i) { return i * legendDotSize; })
                    .attr("rx", legendDotSize * 0.5)
                    .attr("ry", legendDotSize * 0.5)
                    .attr("width", legendDotSize * 0.5)
                    .attr("height", legendDotSize * 0.5)
                    .merge(legendDot)
                    .style("fill", function(d) { return color(d.Race); });

                legendDot.exit().remove();

            });


        },
    }
</script>
