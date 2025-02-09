/**
 * Donut chart class
 */
/**
 * Line chart class
 */
export default class LineChart{ 
    svg; chart; // selections 
    pieData; // internal data 
    margin;//NEWLY ADDED MARGIN
    // PART 3 - add scale properties
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
            .attr('transform',`translate(${this.width/2},${this.height/2})`);
        // PART 3 - use margins to translate group
        // PART 4 - add axes selections
    // let pieData =[['a',2], ['b',3], ['c',6]];
    
        // let xScale = d3.scaleLinear()
        //     .domain([d3.min(pieData, d=> d[0]), d3.max(pieData, d=> d[0])])
        //     .range([0,500]);
        // let yScale = d3.scaleLinear()
        //     .domain([d3.min(pieData, d=> d[1]), d3.max(pieData, d=> d[1])])
        //     .range([200,0]);
    }
    #updateDonut(){ 
        console.log(this.data);     
            let pieGen = d3.pie()
            .padAngle(0.02)
            .sort(null)
            .value(d=>d[1]);
        
let donutData = pieGen(this.data);//------------------------------------KAZHUVERI------------------
      
        //Creating an arc generation
        let arcGen = d3.arc()
           .innerRadius(this.width/4)
           .outerRadius(Math.min(this.width, this.height) / 2 - 5);
        
        let chart = this.chart
           .selectAll('path')
           .data(donutData)
           .join('path')
           .attr('fill', 'cadetblue')    
           .attr('fill-opacity', 0.8)
           .attr('stroke', 'cadetblue')
           .attr('stroke-width', 2)
           .attr('d', arcGen);      
        
        this.chart.selectAll('text')
           .data(donutData)
           .join('text')
           .attr('transform', d => `translate(${arcGen.centroid(d)})`)  // Position the text at the center of each slice
           .attr('text-anchor', 'middle')
        //    .attr('font-size', '12px')
        //    .text(d => [d.data[0],d.data[1]]);
        //    .text(d => d.data[1]);
           .text(d => d.data[0]);
        }    
  
 
    render(dataset){ 
        this.data = dataset; 
        // PART 3 & 4 - add calls to other private methods
        this.#updateDonut(); 
        return this; // to allow chaining 
    } 

}   
    
