
import React from 'react';
import ReactDOM, { render } from 'react-dom';

const SVGComponent = (props) => {
    const parser = new DOMParser();

    function createMarkup() {
        return {__html: props.svg};
      }
    
    return(

       <div dangerouslySetInnerHTML={createMarkup()} />
        
        );
    
}
 
export default SVGComponent;