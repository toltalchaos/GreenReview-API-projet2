import React from 'react';
import {Link} from 'react-router-dom';


const Button = (props) => {
    return ( 

        <>
        <button {...props}>
            {props.label}
            {props.children}
        </button>
        </>

     );
}

const LinkButton = (props) => {
    return ( 
        <Link to ={props.path}>{props.label}</Link>
     );
}
 
export  {Button, LinkButton};
 
