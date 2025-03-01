'use strict';

// This script will produce errors!
// You must complete it to make it work

// This data is used later
let cities  = [
    {city:'Dubai', pop: 3604000, area: 1610, alt: 5},
    {city:'Edinburgh', pop: 506000, area: 119, alt: 47},
    {city:'Lagos', pop: 8048000, area: 1171, alt: 41},
    {city:'Ottawa', pop: 1017000, area: 2790, alt: 70},
    {city:'Putrajaya', pop: 109000, area: 49, alt: 38},
    {city:'Qingdao', pop: 10071000, area: 11228, alt: 25}
];

// PART 1 - Build a bar chart inline

// let barContainer = d3.select('div#bar1');
// let barSvg = barContainer.append('svg')
//     .attr('height', 500)
//     .attr('weight', 800)
//     .classed('barchart',true)
//     .style('border', solid 1px blue);

// let barGroup = barSvg.append('g');
// let bars = barGroup.selectAll('rect.bar')
//     .data(cities, d=>d.city)
//     .join('rect')
//     .attr('x',(d,i)=>i*40+5)    
//     //ALl VALUES WILL BE MULTIPLIED BY THE GIVEN AMOUNT.
//     //ie, 1=>First bar 45px, 2=>Second bar at 85px, 3=>Third bar at 125px
//     .attr('height', d=>d.alt*10)
//     .attr('width', 40)
//     .attr("y", (d) => 500 - d.alt * 10)
//     .style('fill', d=>d.pop<1000000?'#ba4a53':null)
//     .style('stroke', d=>d.pop>1000000?'#381619':null)
// PART 2 - Use a bar chart module

// import BarChart from './BarChart.js'; 
// import ScatterPlot from './ScatterPlot.js'; 

// let bar1 =  new BarChart('div#bar1', 800,500);
// let bar1 =  new BarChart('div#bar1', 700,500, [10,40,45,20]);
// let pointclass =  new ScatterPlot('div#pointsclass', 700,500, [10,40,45,20]);
// let citiesPopulation = cities.map(d=>[d.pop, d.area]);
// console.log(citiesPopulation); 
// pointclass.render(citiesPopulation);


// this line transforms the cities dataset in the generic format 
// that BarChart expects: [[k, v], ...] 
// we will explain it further in the next lab 
// let citiesElevation = cities.map(d=>[d.city, d.alt]); 
// bar1.render(citiesElevation);

// PART 3 & 4 - See in BarChart.js

// PART 5 - Complete DonutChart.js and LineChart.js

// import LineChart from './LineChart.js';
// let chart =  new LineChart('div#line1', 400,400, [20,20,20,20]);
import DonutChart from './DonutChart.js';
// let chart =  new DonutChart('div#line1', 400,400, [20,20,20,20]);


// let citiesPop = cities.map(d=>[d.city, d.pop]); 

let historicPop = [ 
    [2000,451000],[2001,454000],[2002,457000],[2003,460000], 
    [2004,463000],[2005,466000],[2006,468000],[2007,471000], 
    [2008,474000],[2009,477000],[2010,480000],[2011,483000], 
    [2012,489000],[2013,495000],[2014,501000],[2015,507000], 
    [2016,513000],[2017,519000],[2018,525000],[2019,531000], 
    [2020,537000],[2021,543000],[2022,548000],[2023,554000]
];
let donut = new DonutChart('#donut', 500, 700, [20, 20, 20, 20]);
// let donuthere = historicPop.map(d=>[d[0], d[1]]);
// let citiesPopulation = cities.map(d=>[d.pop, d.area]);

// console.log(donuthere); 
// donut.render(donuthere);
donut.render(historicPop);

// LineChart.render(historicPop);
