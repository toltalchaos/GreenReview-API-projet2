
import React from 'react';
import ReactDOM, { render } from 'react-dom';

const SVGComponent = (props) => {
    const parser = new DOMParser();
    const svgElement = parser.parseFromString(props.svg, "image/svg+xml").firstChild;

    console.log(svgElement)
    
    return(

       svgElement
        
        );
    
}
 
export default SVGComponent;