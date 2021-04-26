import AuthContext from './../../../auth/AuthContext';
import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom';



const EditPage = (props) => {
    const auth = useContext(AuthContext);
    const {path, url} = useRouteMatch();

   if(auth.authenticate){
    return ( 
        <>
        {/* EditPage new rev page here */}

        <h2>UNDER CONSTRUCTION</h2>
        </>
        );
   }
   else{
    return (<Redirect to="/"/>);
   }
}
 
export default EditPage;