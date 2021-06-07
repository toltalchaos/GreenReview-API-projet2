import React from 'react';

import SVGComponent from '../../domSvg/DomSvgComp';
import YouTube from './../../iframe/videoBlock';
import {Button} from './../../btn/button';
import styled from "styled-components";
import {Redirect} from "react-router-dom";

const ButtonStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

const ConfirmView = (product) => {
    function handleConfirm(){
      console.log("CONFIRMED")
      


    }
    function handleAbort(){
      console.log("ABORTED")
      window.location.reload();
    }

    return ( 
  
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
             
             <SVGComponent svg={product.effectRating}/>
           </div>

           <div>
             <p>Price description: </p>
             <p> {product.priceDesc} </p>
           </div>
           <div>
             <p>Price rating: </p>
             
             <SVGComponent svg={product.priceRating}/>
           </div>

           <div>
             <p>Strength description: </p>
             <p> {product.strengthDesc} </p>
           </div>
           <div>
             <p>Strength rating: </p>
             
             <SVGComponent svg={product.strengthRating}/>
           </div>

           <div>
             <p> Taste description: </p>
             <p> {product.tasteDesc} </p>
           </div>
           <div>
             <p>Taste rating: </p>
             
             <SVGComponent svg={product.tasteRating}/>
           </div>

           <div>
             <p>Blog: </p>
             <p> {product.blog} </p>
           </div>
          <br/>
          <ButtonStyle>

          <Button label={"CONFIRM"} onClick={handleConfirm}/>
          <Button label={"ABORT"} onClick={handleAbort}/>

          </ButtonStyle>
 
 
         </div>
         


     );
}
 
export default ConfirmView;