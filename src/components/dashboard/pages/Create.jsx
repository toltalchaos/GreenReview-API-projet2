import AuthContext from './../../../auth/AuthContext';
import React, {useContext} from 'react';
import styled from 'styled-components';
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom';

import {FormDDLInput} from './../../formshit/FormComponents'

const CreateStyles = styled.div`
  background-color: #d4e09b;
  border-radius: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  font-size:1.5rem;
  font-weight: bold;
  div{
    display:flex;
    align-items:center;
  }


`

const CreatePage = (props) => {
    const auth = useContext(AuthContext);
    const {path, url} = useRouteMatch();

   if(auth.authenticate){
    return ( 
        <CreateStyles>
            
        <p> UNDER CONSTRUCTION</p>
        
        <div>
        <p>X item rating:</p>
        <FormDDLInput/>
        </div>

        </CreateStyles>
        );
   }
   else{
    return (<Redirect to="/"/>);
   }
}
 
export default CreatePage;