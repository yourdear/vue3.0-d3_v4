<template>
    <div>
        <div id='force'>

        </div>

    </div>
</template>

<script>
    import * as d3 from 'd3';
    export default {
        data(){
            return{}
        },
        mounted(){
            //给一个数据
            const dataArr = [
                {name: 'one', value: 32},
                {name: 'two', value: 36},
                {name: 'three', value: 40},
                {name: 'four', value: 44},
                {name: 'five', value: 48},
                {name: 'six', value: 52},
                {name: 'seven', value: 56},
                {name: 'eight', value: 60},
                {name: 'nine', value: 64},
            ];
            // 处理数据
            const nameArr = dataArr.map((item)=> { return item.name});
            const valueArr = dataArr.map((item)=> { return item.value});
            //指定容器的宽高
            let padding = {top: 20, right: 20, bottom: 20, left: 20},
                width = 500 - padding.right - padding.left,
                height = 500 - padding.bottom - padding.top;

            //x,y轴比例尺
            let xscale = d3.scaleBand().domain(nameArr).rangeRound([0,width]).padding(0.1);
            let yscale = d3.scaleLinear().domain([0,d3.max(valueArr)]).rangeRound([height,0]);


            //创建svg
            const svg = d3.select('#force').append('svg')
                           .attr('width',width + padding.left + padding.right)
                           .attr('height',height + padding.top + padding.bottom);
            //添加g标签
            const g = svg.append('g')
                          .attr('transform',`translate(${padding.top}, ${padding.left})`)

            //像svg添加x轴
            g.append('g')
                .attr('class','axis')
                .attr('transform',`translate(0, ${height})`)
                .call(d3.axisBottom(xscale))
                .attr('font-weight','blod')
            //像svg添加y轴
            g.append('g')
                .attr('class','axis')
                .call(d3.axisLeft(yscale).ticks(10))

            //创建柱子容器
            const chart = g.selectAll('bar').data(dataArr).enter().append('g')
            //绑定数据，画柱子
            chart.append('rect')
                .attr('class','bar')
                .attr('x', function (item) {
                    return xscale(item.name)
                })
                .attr('width',xscale.bandwidth())
                .attr('y', function (item) {
                    return yscale(item.value)
                })
                .attr('height', function (item) {
                    return height - yscale(item.value)
                })
                .attr('fill','steelblue')
            // 添加标题
            g.attr('class','title')
                .append('text')
                .attr('transform',`translate(${width/2}, 20)`)
                .attr('text-anchor','middle')
                .attr('font-weight','600')
                .text('最简单的柱状图')
                .attr('fill','#666')
            //柱子的信息提示
            chart.append('text')
                .attr('x',function (item) {
                    return xscale(item.name)
                })
                .attr('y',function (item) {
                    return yscale(item.value)
                })
                .attr('dx',xscale.bandwidth()/2)
                .attr('dy',20)
                .text(function (item) {
                    return item.value
                })
                .attr('text-anchor','middle')
                .attr('fill', '#fff');
            //交互
            chart.on('mouseover',function () {
                d3.select(this).attr('opacity', '0.7')
            })
                .on('mouseout',function () {
                    d3.select(this).attr('opacity', '1')
                })

        }

    }
</script>

<style lang='scss' scoped>

</style>
