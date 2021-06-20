import React, { useState, useContext } from "react";
import {LinkButton, Button} from "../btn/button"
import styled from 'styled-components'
import AuthContext from "./../../auth/AuthContext";
import { Redirect, useHistory} from "react-router-dom";


const NAV = styled.nav `
padding: 1rem;
background-color: #d4e09b;
display:flex;
flex-wrap: wrap;
align-items: middle;
justify-content: center;
border-radius: 0 0 1rem 1rem;

a,button{
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
.logoutdiv{
    flex-basis: 30%;
    display:flex;
    align-items:center;
    justify-content: flex-end;
}
.logout{
    
    padding: 0.3rem;
    font-size:1.5rem;
    color: #f3a4a4;
    font-family:'Kanit', sans-serif;
    background-color: #65789b;
    text-decoration:none;
    border-radius: 0.5rem;
    border-bottom: none;
    margin: 0 0.5rem;
}
`

const HotBar = (props) => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    function logout(e){
        auth.authenticate = false;
        history.push('/')
    }

  

    return ( 
        <>
        <NAV>
            <LinkButton label="product page" path='/productpage'></LinkButton>
            <LinkButton label="dashboard" path='/dashboard'></LinkButton>
            <div className="logoutdiv">
                  <Button  className="logout" label="logout" onClick={logout}/>
            </div>
          
        </NAV>
        </>
     );
}
 
export default HotBar;