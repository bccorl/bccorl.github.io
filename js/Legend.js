
var data_legend = [
    {
        "name":"A",
        "color":"#4a9b5b"
    },
    {
        "name":"B",
        "color":"#5caeb9"
    },
    {
        "name":"C",
        "color":"#df4b4b"
    },
    {
        "name":"D",
        "color":"#cb7e51"
    },
    {
        "name":"E",
        "color":"#1942f4"
    }
];
 
//初始化图例，将data_legend与图例绑定
var legend = svg.selectAll(".legend") 
    .data(data_legend)
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", function(d, i) { return "translate(-30," + (i * 20 + 30) + ")"; });  //transform属性便是整个图例的坐标
 
//绘制文字后方的颜色框或线
legend.append("rect")
    .attr("x", width - 25) //width是svg的宽度，x属性用来调整位置
    // .attr("x", (width / 160) * 157)  
    //或者可以用width的分数来表示，更稳定一些，这是我试出来的，下面同
    .attr("y", 8)
    .attr("width", 40)
    .attr("height", 3) //设低一些就是线，高一些就是面，很好理解
    .style("fill", function(d){
        return d.color
    });
 
//绘制图例文字
legend.append("text")
    .attr("x", width - 30)
    // .attr("x", (width / 40) * 39)
    .attr("y", 15)
    .style("text-anchor", "end") //样式对齐
    .text(function(d) { 
        return d.name;
]);

