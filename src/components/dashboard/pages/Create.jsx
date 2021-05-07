import AuthContext from './../../../auth/AuthContext';
import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {Redirect, Link, useRouteMatch, Route, Switch} from 'react-router-dom';

import {FormDDLInput, FormTextInput, TextAreaInput} from './../../formshit/FormComponents';
import {Button} from './../../btn/button';
import YouTube from './../../iframe/videoBlock';

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
    justify-content:space-between;
    p{
      padding-left:2rem;
    }
  }


`


const CreatePage = (props) => {
    const auth = useContext(AuthContext);
    const {path, url} = useRouteMatch();
    //init empty stateful object
    const [product, setProduct] = useState({
      MT:true,
      youtubeEmbed:"",
       effectDesc:"",
       effectRating: "",
       imgOne:"",
       imgTwo:"",
       priceDesc:"",
       priceRating:"",
       productId:"",
       strengthDesc:"",
       strengthRating:"",
       tasteDesc:"",
       tasteRating:"",
       title:"",
       blog:""
    })


    function SubmitButtonClick (e) {

      //create stateful object from form elements, use IDs to select
      //select each object by ID and add the object to the stateful object "product"
      //getElementById("someid").... => save into product      
      const newObj =
        {
       MT: false,
       youtubeEmbed: document.getElementById("youtube-link").value,
       effectDesc: document.getElementById("effect-desc").value,
       effectRating: document.getElementById("effect-rating").outerHTML,
       imgOne: document.getElementById("product-img-one").value,
       imgTwo: document.getElementById("product-img-two").value,
       priceDesc: document.getElementById("price-desc").value,
       priceRating: document.getElementById("price-rating").outerHTML,
       productId: document.getElementById("product-id").value,
       strengthDesc: document.getElementById("strength-desc").value,
       strengthRating: document.getElementById("strength-rating").outerHTML,
       tasteDesc: document.getElementById("taste-desc").value,
       tasteRating: document.getElementById("taste-rating").outerHTML,
       title: document.getElementById("product-title").value,
       blog: document.getElementById("blog").value
      }
      setProduct(newObj);
      
    }


   if(auth.authenticate && product.MT == true){
    return ( 
        <CreateStyles>
        
        <div>
        <FormTextInput 
           iid={"product-title"}
           label={"Product Title:"}
           inputType={"Text"}
           name={"product-title"}
          />
          <br/>

          <FormTextInput 
           iid={"product-id"}
           label={"Product SKU:"}
           inputType={"Text"}
           name={"product-id"}
          />
          <br/>
          <FormTextInput 
           iid={"youtube-link"}
           label={"youtube Embedded Link:"}
           inputType={"Text"}
           name={"youtube-link"}
          />
          <br/>
          <FormTextInput 
           iid={"product-img-one"}
           label={"Product image URL:"}
           inputType={"Text"}
           name={"product-img-one"}
          />
          <br/>
          <FormTextInput 
           iid={"product-img-two"}
           label={"Product image URL(2):"}
           inputType={"Text"}
           name={"product-img-two"}
          />
          <br/>
          <FormTextInput 
           iid={"effect-desc"}
           id={"effect"}
           label={"effect description:"}
           inputType={"Text"}
           name={"effect-desc"}
          />
          <div>
            <p>effect rating:</p>
            <FormDDLInput id={"effect-rating"}/>
          </div>
          
          <FormTextInput 
           iid={"price-desc"}
           label={"price description:"}
           inputType={"Text"}
           name={"price-desc"}
          />
          <div>
            <p>price rating:</p>
            <FormDDLInput id={"price-rating"}/>
          </div>

           
          <FormTextInput 
           iid={"strength-desc"}
           label={"strength description:"}
           inputType={"Text"}
           name={"strength-desc"}
          />
          <div>
            <p>strength rating:</p>
            <FormDDLInput id={"strength-rating"}/>
          </div>
          
          
          <FormTextInput 
           iid={"taste-desc"}
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
          onClick={() => {SubmitButtonClick()}}
        ></Button>

        </CreateStyles>
        );
   }
   else if (auth.authenticate && product.MT == false) {
     console.log(product);
     const parser = new DOMParser();
     const effRating = parser.parseFromString(product.effectRating, "image/svg+xml");
    return (
      <CreateStyles>

        {/* //read the object "product" into elements on the screen  */}
        <p>new object created</p>
  
        <div>
          <div>
            <p>Title: </p>
            <p> {product.title} </p>
          </div>
          <div>
            <p>product SKU: </p>
            <p> {product.productId} </p>
          </div>
          <div>
            <p>youtube </p>
          </div>
          <div>
          <YouTube link={product.youtubeEmbed}/>
          
          </div>
          <br/>
          <div>
            <p>image 1</p>
            <img src={product.imgOne} alt= "first image"></img>
          </div>
          <div>
            <p>image 2</p>
            <img src={product.imgTwo} alt= "second image"></img>
          </div>
          <div>
            <p>effect description: </p>
            <p> {product.effectDesc} </p>
          </div>
          <div>
            <p>effect rating: </p>
             {effRating}
          </div>



        </div>
        {/* //add buttons to confirm or deny 
          //confirm -> sends to RTDB
          //deny -> nukes the object */}

      </CreateStyles>
    )} 

   else{
    return (<Redirect to="/"/>);
   }
}
 
export default CreatePage;