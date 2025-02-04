// PART 3 & 4 - complete empty methods

/**
 * Bar chart class
 */
export default class BarChart{ 

    // Attributes (you can make those private too) 
    width; height; // size 
    svg; chart; bars; // selections 
    data; // internal data 

    // PART 3 - add scale properties

    // PART 4 - add axis properties

    // Constructor
    constructor(container, width, height){ 
        // PART 3 - add margin parameter
        this.width = width; 
        this.height = height;
 
        this.svg = d3.select(container).append('svg')
            .classed('barchart', true) 
            .attr('width', width).attr('height', height); 
        
        this.chart = this.svg.append('g'); 
        // PART 3 - use margins to translate group

        this.bars = this.chart.selectAll('rect.bar'); 

        // PART 4 - add axes selections
    } 

 

    // Private methods 

    // data is in the format [[key,value],...] 
    #updateBars(){ 
        // PART 3 - modify to use scales
        this.bars = this.bars 
            .data(this.data, d=>d[0]) 
            .join('rect') 
            .classed('bar', true) 
            .attr('x', (d,i) => i*40+5) 
            .attr('y', d => this.height - d[1]*10) 
            .attr('width', 40) 
            .attr('height', d => d[1]*10); 
    } 

    #updateScales(){
        // PART 3 - complete method
    }

    #updateAxes(){
        // PART 4 - complete method
    }
    

    // Public API 

    // The dataset parameter needs to be in a generic format, 
    // so that it works for all future data 
    // here we assume a [[k,v], ...] format for efficiency 
    render(dataset){ 
        this.data = dataset; 
        // PART 3 & 4 - add calls to other private methods
        this.#updateBars(); 
        return this; // to allow chaining 
    } 

} 