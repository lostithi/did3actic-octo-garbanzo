/**
 * Line chart class
 */
export default class LineChart{ 
svg; chart; // selections 
data; // internal data 
margin;//NEWLY ADDED MARGIN
xScale;yScale;
// Constructor
constructor(container, width, height, margin){ 
    // PART 3 - add margin parameter
    this.width = width; 
    this.height = height;
    this.margin = margin;
    
    this.svg = d3.select(container)
        .append('svg')
        .classed('barchart', true) 
        .attr('width', width)   
        .attr('height', height); 
    
    this.chart = this.svg.append('g')
    // PART 3 - use margins to translate group
        .attr('transform',`translate(${this.margin[2]},${this.margin[0]})`);
    // PART 4 - add axes selections
let data =[[80,50], [120,120], [160,140], [200,90], [240,150], [280,50]];

    let xScale = d3.scaleLinear()
        .domain([d3.min(data, d=> d[0]), d3.max(data, d=> d[0])])
        .range([0,500]);
    let yScale = d3.scaleLinear()
        .domain([d3.min(data, d=> d[1]), d3.max(data, d=> d[1])])
        .range([200,0]);

    let lineGen = d3.line()
        .curve(d3.curveCardinal)
        .x(d=>xScale(d[0]))
        .y(d=>yScale(d[1]));

    this.line = this.chart.append('path')
    .datum(data)    //Binds a single datum (data object) to a single DOM element.WHILE data() 	Binds an array of data to multiple DOM elements.
    .attr('fill', 'none')
    .attr('stroke', 'coral')
    .attr('stroke-width', 3)
    .attr('d', lineGen);   

    }
     


}

