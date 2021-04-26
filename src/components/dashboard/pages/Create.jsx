import AuthContext from './../../../auth/AuthContext';
import React, {useContext} from 'react';
import styled from 'styled-components';
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom';

const CreateStyles = styled.div`
  background-color: #d4e09b;
  border-radius: 1rem;
  margin: 1rem;


`

const CreatePage = (props) => {
    const auth = useContext(AuthContext);
    const {path, url} = useRouteMatch();

   if(auth.authenticate){
    return ( 
        <CreateStyles>
            
        <p> UNDER CONSTRUCTION</p>

        </CreateStyles>
        );
   }
   else{
    return (<Redirect to="/"/>);
   }
}
 
export default CreatePage;