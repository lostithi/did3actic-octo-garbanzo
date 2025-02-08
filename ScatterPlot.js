

export default class ScatterPlot{ 

    // Attributes (you can make those private too) 
    width; height; // size 
    svg; chart; points; // selections 
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
            .classed('scatterplot', true) 
            .attr('width', width)  
            .attr('height', height); 

        this.pointchart = this.svg.append('g')
        // PART 3 - use margins to translate group
            .attr('transform',`translate(${this.margin[2]},${this.margin[0]})`);
    this.points = this.pointchart.selectAll('circle.point'); 
         
        // PART 4 - add axes selections
        this.axisX = this.svg.append('g')
            .attr('transform',`translate(${this.margin[2]},${this.height-this.margin[1]})`);
        this.axisY = this.svg.append('g')
            .attr('transform',`translate(${this.margin[2]},${this.margin[0]})`);
        
        this.labelX = this.svg.append('text') 
            .attr('transform', `translate(${this.width/2},${this.height})`) 
            .style('text-anchor', 'middle').attr('dy',-5); 
        this.labelY = this.svg.append('text') 
            .attr('transform', `translate(0,${this.margin[0]})rotate(-90)`) 
            .style('text-anchor', 'end').attr('dy',15); 

        } 

 
    #updatePoints(){ 
        // PART 3 - modify to use scales
        this.points = this.points 
            .data(this.data, d=>d[0]) 
            .join('circle') 
            .classed('point', true) 
            .attr('cx',d=>this.scaleX(d[0])) 
            .attr('cy', d => this.scaleY(d[1])) 
            .attr('radius', 1.5) 
            .attr('fill','blue');
    } 



    
    #updateScales(){
        // PART 3 - complete method
        let chartWidth = this.width-this.margin[2]-this.margin[3];
        let chartHeight = this.height-this.margin[0]-this.margin[1];
        let rangeX = [0, chartWidth],   
            rangeY = [chartHeight, 0];    

        let domainX = this.data.map(d=>d[0]),//X DOMAIN ARE SAME AS THOSE OF THE INPUT DATASET LIST loaded one by one. 
            domainY = [0, d3.max(this.data, d=>d[1])];//Y DOMAINS START FROM 0 as all axes do and ENDS AT MAX OF 2nd VALUE(d(1)).
        
        this.scaleX = d3.scaleLog(domainX, rangeX);
        this.scaleY = d3.scaleLinear(domainY, rangeY);
   
        }

    #updateAxes(){
        // PART 4 - complete method
        let axisGenX = d3.axisBottom(this.scaleX),
            axisGenY = d3.axisLeft(this.scaleY);
        this.axisX.call(axisGenX);
        this.axisY.call(axisGenY);
    }
    

    render(dataset){ 
        this.data = dataset; 
        // PART 3 & 4 - add calls to other private methods
        this.#updateScales(); 
        this.#updateAxes(); 
        this.#updatePoints(); 
        return this; // to allow chaining 
    } 
    setLabels(labelX='values', labelY='values'){ 
        this.labelX.text(labelX); 
        this.labelY.text(labelY); 
        return this; 
        } 
} 
