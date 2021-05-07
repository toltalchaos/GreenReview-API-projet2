import React from 'react';
import ReactDOM from 'react-dom';

const SVGComponent = (props) => {
    console.log(props.eid)
   ReactDOM.render(props.svg, document.getElementById(props.eid))
     
}
 
export default SVGComponent;