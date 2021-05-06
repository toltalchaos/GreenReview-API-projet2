import React, {useState} from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGrinSquintTears, faFrown, faUndo } from '@fortawesome/free-solid-svg-icons'

const FormInputStyles = styled.div`
  
  box-shadow: 0 4px -2px rgba(0, 0, 0, 0.12);
  input {
    width: 100%;

    font-size: 1.5rem;

    background-color: #dfdfdf;
    border-radius:0.3rem;

    padding: 0.25rem;

    outline: none;

    color: #a44a3f;

    margin: 0.5rem;
  }
  label {
    font-size: 1.5rem;
    color: #a44a3f;
  }
`;
const FormListStyles = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  li{

  border: 2px solid #283d3b;
  padding: 1rem;
  border-radius: 1rem;
  margin: 0.5rem;
  }
  .undo{
    padding:0.3rem;
    color:tomato;
    border: 2px solid tomato;
    margin:auto;
  }

`
const FormTextAreaStyles = styled.div`
color: #a44a3f;
margin: auto;
display: flex;
flex-direction: column;
textarea{
  width: 100%;
  height: 8rem;
  margin-left: 1rem;
  font-size: 1.5rem;
  

}

`

const FormTextInput = (props) => {
  return (
    <FormInputStyles {...props}>
      <label htmlFor={props.iid}>{props.label}</label>
      <input type={props.inputType} id={props.iid} name={props.name}></input>
    </FormInputStyles>
  );
};

const FormDDLInput = (props) => {
  const [selected, setSelected] = useState(false);
  const [chosen, setChosen] = useState(0);
  

  function selectsvg(selected) {
    
    setChosen(selected);
    setSelected(true);
    //console.log("selected option")
    
  }
  function undoSelect(){
    setChosen(0);
    setSelected(false);
  }


if(selected == false){
  return (
    
        <FormListStyles>
          <li onClick={() => {selectsvg(1)}}><FontAwesomeIcon icon={faCoffee} /></li>
          <li onClick={() => {selectsvg(2)}}><FontAwesomeIcon icon={faGrinSquintTears} /></li>
          <li onClick={() => {selectsvg(3)}}><FontAwesomeIcon icon={faFrown} /></li>
        </FormListStyles>  
    
  );
}
  else{
    switch(chosen){
      case 1: 
        return (
        <FormListStyles>
          <li><FontAwesomeIcon icon={faCoffee} id={props.id} name={props.id}/></li>
          <li onClick={() => {undoSelect()}} className="undo"><FontAwesomeIcon icon={faUndo} /></li>
        </FormListStyles>
        );
      break;
      case 2:
        return(<FormListStyles>
          <li><FontAwesomeIcon icon={faGrinSquintTears} id={props.id} name={props.id}/></li>
          <li onClick={() => {undoSelect()}} className="undo"><FontAwesomeIcon icon={faUndo} /></li>
        </FormListStyles>);
      break;
      case 3:
        return(<FormListStyles>
          <li><FontAwesomeIcon icon={faFrown} id={props.id} name={props.id} /></li>
          <li onClick={() => {undoSelect()}} className="undo"><FontAwesomeIcon icon={faUndo} /></li>
        </FormListStyles>);
      break;


      default: setSelected = false;
      break;
    }
  }
  
};

const TextAreaInput = (props) => {
  return (
    <FormTextAreaStyles>
       <label htmlFor={props.id}>{props.label}</label>
      <textarea cols="50" id={props.id} name={props.id}/>

    </FormTextAreaStyles>
    
  );
};

export { FormTextInput, FormDDLInput, TextAreaInput };
