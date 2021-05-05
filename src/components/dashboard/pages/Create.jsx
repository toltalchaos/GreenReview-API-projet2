import AuthContext from './../../../auth/AuthContext';
import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom';

import {FormDDLInput, FormTextInput, TextAreaInput} from './../../formshit/FormComponents';
import {Button} from './../../btn/button'

const CreateStyles = styled.div`
  background-color: #d4e09b;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  font-size:1.5rem;
  font-weight: bold;
p{

  color: #a44a3f;
}

  div>div{
    display:flex;
    align-items:center;
  }


`

const CreatePage = (props) => {
    const auth = useContext(AuthContext);
    const {path, url} = useRouteMatch();
    //init empty stateful object
    const [procuct, setProduct] = useState(null)

    function SubmitButtonClick (e) {

      //create stateful object from form elements, use IDs to select
      //select each object by ID and add the object to the stateful object "product"

      
    }


   if(auth.authenticate && procuct == null){
    return ( 
        <CreateStyles>
        
        <div>
        <FormTextInput 
           id={"product-title"}
           label={"Product Title:"}
           inputType={"Text"}
           name={"product-title"}
          />
          <br/>

          <FormTextInput 
           id={"product-id"}
           label={"Product SKU:"}
           inputType={"Text"}
           name={"product-id"}
          />
          <br/>
          <FormTextInput 
           id={"youtube-link"}
           label={"youtube Embedded Link:"}
           inputType={"Text"}
           name={"youtube-link"}
          />
          <br/>
          <FormTextInput 
           id={"product-img-one"}
           label={"Product image URL:"}
           inputType={"Text"}
           name={"product-img-one"}
          />
          <br/>
          <FormTextInput 
           id={"product-img-two"}
           label={"Product image URL(2):"}
           inputType={"Text"}
           name={"product-img-two"}
          />
          <br/>
          <FormTextInput 
           id={"effect-desc"}
           label={"effect description:"}
           inputType={"Text"}
           name={"effect-desc"}
          />
          <div>
            <p>effect rating:</p>
            <FormDDLInput id={"effect-rating"}/>
          </div>
          
          <FormTextInput 
           id={"price-desc"}
           label={"price description:"}
           inputType={"Text"}
           name={"price-desc"}
          />
          <div>
            <p>price rating:</p>
            <FormDDLInput id={"price-rating"}/>
          </div>

           
          <FormTextInput 
           id={"strength-desc"}
           label={"strength description:"}
           inputType={"Text"}
           name={"strength-desc"}
          />
          <div>
            <p>strength rating:</p>
            <FormDDLInput id={"strength-rating"}/>
          </div>
          
          
          <FormTextInput 
           id={"taste-desc"}
           label={"taste description:"}
           inputType={"Text"}
           name={"taste-desc"}
          />
          <div>
            <p>taste rating:</p>
            <FormDDLInput id={"taste-rating"}/>
          </div>

          <div>
            
            <TextAreaInput id={"blog"} label={"Blog:"}/>
          </div>
        
        </div>
        <br/>
        <Button label={"Submit"}
          onClick={SubmitButtonClick}
        ></Button>

        </CreateStyles>
        );
   }
   else if (auth.authenticate && procuct != null) {
    return (
      //read the object "product" into elements on the screen 
      <p>new object created</p>
      //add buttons to confirm or deny 
        //confirm -> sends to RTDB
        //deny -> nukes the object
    );
   } 

   else{
    return (<Redirect to="/"/>);
   }
}
 
export default CreatePage;