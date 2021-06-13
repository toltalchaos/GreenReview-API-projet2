import AuthContext from './../../../auth/AuthContext';
import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom';
import { LinkButton } from "./../../btn/button";

const Display = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

const SavedPage = (props) => {
    const auth = useContext(AuthContext);
    const {path, url} = useRouteMatch();

   if(auth.authenticate){
    return ( 
        <>
        {/* saved new rev page here */}
        <Display>

        <h3>saved.</h3>
        <LinkButton path="/dashboard" label="Home"></LinkButton>
        
        </Display>
        </>
        );
   }
   else{
    return (<Redirect to="/"/>);
   }
}
 
export default SavedPage;