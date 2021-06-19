import AuthContext from "./../../../auth/AuthContext";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Redirect, Link, useRouteMatch, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

import {
  FormDDLInput,
  FormTextInput,
  TextAreaInput,
} from "./../../formshit/FormComponents";
import { Button } from "./../../btn/button";

import ConfirmView from "./Confirm";
import ErrorMsg from "../../errorMSG/ErrorMsg";

const CreateStyles = styled.div`
  background-color: #d4e09b;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  p {
    color: #a44a3f;
  }

  div > div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    p {
      padding-left: 1rem;
    }
    svg {
      font-size: 3rem;
    }
  }
`;

const CreatePage = (props) => {
  const auth = useContext(AuthContext);
  const { path, url } = useRouteMatch();
  //svg checker
  const [svgCheck, setSvgCheck] = useState({
    gensvg: false,
    effsvg: false,
    prisvg: false,
    strsvg: false,
    tassvg: false
  })
  //init empty stateful object
  const [product, setProduct] = useState({
    MT: true,
    err: false,
    youtubeEmbed: "",
    effectDesc: "",
    effectRating: "",
    imgOne: "",
    imgTwo: "",
    priceDesc: "",
    priceRating: "",
    productId: "",
    strengthDesc: "",
    strengthRating: "",
    tasteDesc: "",
    tasteRating: "",
    title: "",
    blog: ""
  });
  function ErrorFlag(){
    const errobj = {
      MT: true,
      err: true,
      youtubeEmbed: "",
      effectDesc: "",
      effectRating: "",
      imgOne: "",
      imgTwo: "",
      priceDesc: "",
      priceRating: "",
      productId: "",
      strengthDesc: "",
      strengthRating: "",
      tasteDesc: "",
      tasteRating: "",
      title: "",
      blog: ""
    }
    setProduct(errobj);
  }

  //function to update that a svg has been selected
  function SelectSvg(svgnum){
    //console.log("selected SVG Number" + svgnum)
    let svgedit = svgCheck;
    //console.log(svgedit)
    switch (svgnum) {
      case 0:
        svgedit.gensvg = true;
        setSvgCheck(svgedit);
        break;
      case 1:
        svgedit.effsvg = true;
        setSvgCheck(svgedit);
        break;
      case 2:
        svgedit.prisvg = true;
        setSvgCheck(svgedit);
        break;
      case 3:
        svgedit.strsvg = true;
        setSvgCheck(svgedit);
        break;
      case 4:
        svgedit.tassvg = true;
        setSvgCheck(svgedit);
        break;
    }
  }
  
  function SubmitButtonClick(e) {
    //error handle all fields filled
    //svgs
    if (
      document.getElementById("effect-rating") != null ||
      document.getElementById("general-rating") != null ||
      document.getElementById("price-rating") != null ||
      document.getElementById("strength-rating") != null ||
      document.getElementById("taste-rating") != null
    ) {
      //svgs good
      const newObj = {
        MT: false,
        err: false,
        youtubeEmbed: document.getElementById("youtube-link").value,
        genrating: document.getElementById("general-rating").outerHTML,
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
        blog: document.getElementById("blog").value,
      };
      //inputs
      if(newObj.youtubeEmbed == "" ||
          newObj.effectDesc == "" ||
          newObj.imgOne == "" ||
          newObj.imgTwo == "" ||
          newObj.priceDesc == "" ||
          newObj.productId == "" ||
          newObj.strengthDesc == "" ||
          newObj.tasteDesc == "" || 
          newObj.title == "" ||
          newObj.blog == ""){
            ErrorFlag();
          }
        else if(svgCheck.effsvg == false ||
          svgCheck.prisvg == false ||
          svgCheck.strsvg == false ||
          svgCheck.tassvg == false){
            ErrorFlag();
        }
        else{
          setProduct(newObj);
        }

    
      
      
    } else {
      //svgs bad
      ErrorFlag()
    }
  }

  //MT form
  if (auth.authenticate && product.MT == true && product.err == false) {
    return (
      <CreateStyles>
        <div>
          <FormTextInput
            iid={"product-title"}
            label={"Product Title:"}
            inputType={"Text"}
            name={"product-title"}
          />
          <br />

          <FormTextInput
            iid={"product-id"}
            label={"Product SKU:"}
            inputType={"Text"}
            name={"product-id"}
          />
          <br />
          <FormTextInput
            iid={"youtube-link"}
            label={"youtube Embedded Link:"}
            inputType={"Text"}
            name={"youtube-link"}
          />
          <br />
          <FormTextInput
            iid={"product-img-one"}
            label={"Product image URL:"}
            inputType={"Text"}
            name={"product-img-one"}
          />
          <br />
          <FormTextInput
            iid={"product-img-two"}
            label={"Product image URL(2):"}
            inputType={"Text"}
            name={"product-img-two"}
          />
          <br />
          <FormTextInput
            iid={"effect-desc"}
            id={"effect"}
            label={"effect description:"}
            inputType={"Text"}
            name={"effect-desc"}
          />
           <div>
            <p>general rating:</p>
             <FormDDLInput id={"general-rating"} onClick={() => {
            SelectSvg(0);
          }}/> 
          </div>
          <div>
            <p>effect rating:</p>
             <FormDDLInput id={"effect-rating"} onClick={() => {
            SelectSvg(1);
          }}/> 
          </div>

          <FormTextInput
            iid={"price-desc"}
            label={"price description:"}
            inputType={"Text"}
            name={"price-desc"}
          />
          <div>
            <p>price rating:</p>
            <FormDDLInput id={"price-rating"} onClick={() => {
            SelectSvg(2);
          }}/>
          </div>

          <FormTextInput
            iid={"strength-desc"}
            label={"strength description:"}
            inputType={"Text"}
            name={"strength-desc"}
          />
          <div>
            <p>strength rating:</p>
            <FormDDLInput id={"strength-rating"} onClick={() => {
            SelectSvg(3);
          }}/>
          </div>

          <FormTextInput
            iid={"taste-desc"}
            label={"taste description:"}
            inputType={"Text"}
            name={"taste-desc"}
          />
          <div>
            <p>taste rating:</p>
            <FormDDLInput id={"taste-rating"} onClick={() => {
            SelectSvg(4);
          }}/>
          </div>

          <div>
            <TextAreaInput id={"blog"} label={"Blog:"} />
          </div>
        </div>
        <br />
        <Button
          label={"Submit"}
          onClick={() => {
            SubmitButtonClick();
          }}
        ></Button>
      </CreateStyles>
    );
  } 
  //good form
  else if (auth.authenticate && product.MT == false) {
    return (
      <CreateStyles>
        <ConfirmView {...product} />
      </CreateStyles>
    );
  } 
  //ERROR FLAG
   else if (auth.authenticate && product.err == true) {
    console.log("ERROR FLAG")
    return (
    <CreateStyles>
      <ErrorMsg msg={"please reload and fill and select ALL fields"} />
    </CreateStyles>);
  }  
  //no auth
  else { 
     return <Redirect to="/" />;
   }
  };

export default CreatePage;
