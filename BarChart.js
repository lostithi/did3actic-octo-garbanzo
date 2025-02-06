// PART 3 & 4 - complete empty methods

/**
 * Bar chart class
 */
export default class BarChart{ 

    // Attributes (you can make those private too) 
    width; height; // size 
    svg; chart; bars; // selections 
    data; // internal data 
    margin;//NEWLY ADDED MARGIN
    // PART 3 - add scale properties
    chartWidth;
    chartHeight;
    rangeX;
    rangeY;
    domainX;
    domainY;
    scaleX;
    scaleY;
    // PART 4 - add axis properties
    axisX;
    axisY;
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
            .attr('transform','translate(${this.margin[2]},${this.margin[0]})');
         
        this.bars = this.chart.selectAll('rect.bar'); 
        // PART 4 - add axes selections
        this.axisX = this.svg.append('g')
            .attr('transform','translate(${this.margin[2]},${this.height-this.margin[1]})');
        this.axisY = this.svg.append('g')
            .attr('transform','translate(${this.margin[2]},${this.margin[0]})');
        
        

        } 

 

    // Private methods 

    // data is in the format [[key,value],...] 

    // #updateBars(){ 
    //     // PART 3 - modify to use scales
    //     this.bars = this.bars 
    //         .data(this.data, d=>d[0]) 
    //         .join('rect') 
    //         .classed('bar', true) 
    //         .attr('x', (d,i) => i*40+5) 
    //         .attr('y', d => this.height - d[1]*10) 
    //         .attr('width', 40) 
    //         .attr('height', d => d[1]*10); 
    // } 

    #updateBars(){ 
        // PART 3 - modify to use scales
        this.bars = this.bars 
            .data(this.data, d=>d[0]) 
            .join('rect') 
            .classed('bar', true) 
            .attr('x',d=>this.scaleX(d[0])) 
            .attr('y', d => this.scaleY(d[1])) 
            .attr('width', this.scaleX.bandwidth()) 
            .attr('height', d =>this.scaleY(0)-this.scaleY(d[1])); 
    } 


    
    #updateScales(){
        // PART 3 - complete method
        let chartWidth = this.width-this.margin[2]-this.margin[3];
        let chartHeight = this.height-this.margin[0]-this.margin[1];
        let rangeX = [0, chartWidth],   
            rangeY = [chartHeight, 0];    

        let domainX = this.data.map(d=>d[0]),//X DOMAIN ARE SAME AS THOSE OF THE INPUT DATASET LIST loaded one by one. 
            domainY = [0, d3.max(this.data, d=>d[1])];//Y DOMAINS START FROM 0 as all axes do and ENDS AT MAX OF 2nd VALUE(d(1)).
        
        this.scaleX = d3.scaleBand(domainX, rangeX).padding(0.2);
        this.scaleY = d3.scaleLinear(domainY, rangeY);
        }

    #updateAxes(){
        // PART 4 - complete method
        let axisGenX = d3.axisBottom(this.scaleX),
            axisGenY = d3.axisLeft(this.scaleY);
        this.axisX.call(axisGenX);
        this.axisY.call(axisGenY);
    }
    

    // Public API 

    // The dataset parameter needs to be in a generic format, 
    // so that it works for all future data 
    // here we assume a [[k,v], ...] format for efficiency 
    render(dataset){ 
        this.data = dataset; 
        // PART 3 & 4 - add calls to other private methods
        this.#updateScales(); 
        this.#updateBars(); 
        this.#updateAxes(); 
        return this; // to allow chaining 
    } 

} 
