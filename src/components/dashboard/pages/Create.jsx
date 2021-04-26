import AuthContext from './../../../auth/AuthContext';
import React, {useState,useContext} from 'react';
import styled from 'styled-components';
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom';



const CreatePage = (props) => {
    const auth = useContext(AuthContext);
    const {path, url} = useRouteMatch();

   if(auth.authenticate){
    return ( 
        <>
        {/* create new rev page here */}
        </>
        );
   }
   else{
    return (<Redirect to="/"/>);
   }
}
 
export default CreatePage;