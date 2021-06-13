import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const BTN = styled.button`
    padding: 1rem;
    font-size:2rem;
    color: #f6f4d2;
    font-family:'Kanit', sans-serif;
    background-color: #a44a3f;
    text-decoration:none;
    border-radius: 1rem;
    border-bottom: 1px dashed #a44a3f;
    margin: 0 0.5rem;
`
const LINK = styled.div`
    margin:2rem;
    a{
        padding: 1rem;
        font-size:2rem;
        color: #f6f4d2;
        font-family:'Kanit', sans-serif;
        background-color: #a44a3f;
        text-decoration:none;
        border-radius: 1rem;
        border-bottom: 1px dashed #a44a3f;
        margin: 0 0.5rem;

    }

`

const Button = (props) => {
    return ( 

        <>
        <BTN {...props}>
            {props.label}
            {props.children}
        </BTN>
        </>

     );
}

const LinkButton = (props) => {
    return ( 
        <LINK{...props}>
        <Link to ={props.path}>{props.label}</Link>
        </LINK>
     );
}
 
export  {Button, LinkButton};
 
