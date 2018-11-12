<template>
    <div id="line">
        <div class="pie">

        </div>
    </div>
</template>

<script>
    import * as d3 from 'd3'
    export default {
        name: 'pie',
        data(){
            return{
                pieData: [{
                    name: '小米',
                    value: 60.8
                }, {
                    name: '华为',
                    value: 20.8
                }, {
                    name: '联想',
                    value: 30.4
                }, {
                    name: '三星',
                    value: 40.8
                }, {
                    name: '苹果',
                    value: 90.8
                }, {
                    name: '其他',
                    value: 100.8
                } ]
            }
        },
        mounted(){

            // this.multiPie()
            this.pie()
            // this.easePie()
        },
        methods: {
          pie(){
              //容器
               let height = 500,
                   width = 500;
               const svg = d3.select('.pie')
                   .append('svg')
                   .attr('width', `${width}px`)
                   .attr('height', `${height}px`)
              //数据
              const data = [
                  {name: '苹果', value: 40},
                  {name: '橘子', value: 60},
                  {name: '橙子', value: 80},
                  {name: '西瓜', value: 80},
                  {name: '桃子', value: 70},
                  {name: '大枣', value: 60}
                  ]
              let pie = d3.pie().value(d => d.value)
              const pieData = pie(data)
              //颜色
              const color = d3.scaleOrdinal(d3.schemeCategory10)
              //饼图的弧形生成器
              let innerPie = 40
              let outerPie = 100
              let arc = d3.arc()
                  .innerRadius(innerPie)
                  .outerRadius(outerPie)

              //绘图
              let g = svg.selectAll('g')
                  .data(pieData)
                  .enter()
                  .append('g')
                  .attr('transform',`translate(100,100)`)
              g.append('path')
                  .attr('fill',(item,index) => color(item.value))
                  .attr('d',(item,index) => arc(item))
                  .attr('stroke','#fff')
              //提示
              // 添加文字value
              g.append('text')
                  .attr('transform', function (d) {
                      let x = arc.centroid(d)[0] * 1.4
                      let y = arc.centroid(d)[1] * 1.4
                      return 'translate(' + x + ',' + y + ')'
                  })
                  .attr('text-anchor', 'middle')
                  .attr('font-size', '14')
                  .text(function (d) {
                      return d.value
                  })
              // 添加文字name
              g.append('text')
                  .attr('transform', function (d) {
                      let x = arc.centroid(d)[0] * 2.5
                      let y = arc.centroid(d)[1] * 2.5
                      return 'translate(' + x + ',' + y + ')'
                  })
                  .attr('text-anchor', 'middle')
                  .attr('font-size', '14')
                  .text(function (d) {
                      return d.data.name
                  })
              // 添加直线
              g.append('line')
                  .attr('stroke', '#999')
                  .attr('stroke-width', '1px')
                  .attr('x1', function (d) { return arc.centroid(d)[0] * 2 })
                  .attr('y1', function (d) { return arc.centroid(d)[1] * 2 })
                  .attr('x2', function (d) { return arc.centroid(d)[0] * 2.3 })
                  .attr('y2', function (d) { return arc.centroid(d)[1] * 2.3 })
          },
         multiPie(){
                 // let width = 400
                 // let height = 400
                 //
                 // let svg = d3.select('.pie')
                 //     .append('svg')
                 //     .attr('width', width + 'px')
                 //     .attr('height', height + 'px')
                 // let pie = d3.pie()
                 //     .value((d) => d.value)
                 // // 数据转化
                 // let pieData = pie(this.pieData)
                 //
                 // let outerRadius = width / 2.8
                 // let innerRadius = 0
                 // // 创建弧生成器
                 // let arc = d3.arc()
                 //     .innerRadius(outerRadius)
                 //     .outerRadius(innerRadius)
                 // let color = d3.scaleOrdinal(d3.schemeCategory10)
                 // let arcs = svg.selectAll('g')
                 //     .data(pieData)
                 //     .enter()
                 //     .append('g')
                 //     .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
                 arcs.append('path')
                     .attr('fill', function (d, i) { return color(i) })
                     .attr('d', function (d, i) { return arc(d) })
                     // 设置动画,还未看懂这部分内容的参数部分
                     .transition()
                     .duration(4000)
                     .attrTween('d', function (d, i) {
                         let fn = d3.interpolateObject({
                             endAngle: d.startAngle
                         }, d)
                         return function (i) {
                             return arc(fn(i))
                         }
                     })
                 // 添加文字value
                 arcs.append('text')
                     .attr('transform', function (d) {
                         let x = arc.centroid(d)[0] * 1.4
                         let y = arc.centroid(d)[1] * 1.4
                         return 'translate(' + x + ',' + y + ')'
                     })
                     .attr('text-anchor', 'middle')
                     .attr('font-size', '14')
                     .text(function (d) {
                         return d.value
                     })
                 // 添加文字name
                 arcs.append('text')
                     .attr('transform', function (d) {
                         let x = arc.centroid(d)[0] * 2.5
                         let y = arc.centroid(d)[1] * 2.5
                         return 'translate(' + x + ',' + y + ')'
                     })
                     .attr('text-anchor', 'middle')
                     .attr('font-size', '14')
                     .text(function (d) {
                         return d.data.name
                     })
                 // 添加直线
                 arcs.append('line')
                     .attr('stroke', '#999')
                     .attr('stroke-width', '1px')
                     .attr('x1', function (d) { return arc.centroid(d)[0] * 2 })
                     .attr('y1', function (d) { return arc.centroid(d)[1] * 2 })
                     .attr('x2', function (d) { return arc.centroid(d)[0] * 2.3 })
                     .attr('y2', function (d) { return arc.centroid(d)[1] * 2.3 })

         },
         easePie(){
             //饼的颜色
             const colors = d3.scaleOrdinal(d3.schemeCategory10)

             //饼图数据
             const data = [1,3,5,7,9,11,13]
             //数据转换
             const pieData = d3.pie()(data)
             //弧形生成器，定义内圆半径，外圆半径
             const arc = d3.arc()
                 .innerRadius(40)
                 .outerRadius(100)
                 .startAngle(d => d.startAngle)
                 .endAngle(d => d.endAngle)
             //绑定数据
             let svg = d3.select('.pie').append('svg')
                 svg.append('g')
                 .selectAll('bar')
                 .data(pieData)
                 .enter()
                 .append('path')
                 .attr('d',arc)
                 .attr('fill',(item,index) => colors(item.value))
                 .attr('stroke','#fff')

            }
        }
    }
</script>

<style lang="scss" scoped>
    .pie {
        height: 100%;
        width: 100%;
    }
</style>
