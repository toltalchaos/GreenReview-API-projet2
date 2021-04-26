import React, {useState} from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGrinSquintTears, faFrown, faUndo } from '@fortawesome/free-solid-svg-icons'

const FormInputStyles = styled.div`
  color: grey;
  box-shadow: 0 4px -2px rgba(0, 0, 0, 0.12);
  input {
    width: 100%;

    font-size: 1rem;

    background-color: #dfdfdf;

    border: none;

    padding: 0.25rem;

    outline: none;

    color: #a44a3f;

    margin: 0.5rem;
  }
  label {
    font-size: 1rem;
    font-weight: bold;
    color: #283d3b;
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
  }

`

const FormTextInput = (props) => {
  return (
    <FormInputStyles {...props}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.inputType} id={props.id} name={props.name}></input>
    </FormInputStyles>
  );
};

const FormDDLInput = (props) => {
  const [selected, setSelected] = useState(false);
  const [chosen, setChosen] = useState(0);
  

  function selectsvg(selected) {
    //try create a stateful component "selected" when false return dropdown, when true, return selected?
    setChosen(selected);
    setSelected(true);
    console.log("selected option")
    
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
          <li><FontAwesomeIcon icon={faCoffee} /></li>
          <li onClick={() => {undoSelect()}}><FontAwesomeIcon icon={faUndo} /></li>
        </FormListStyles>
        );
      break;
      case 2:
        return(<FormListStyles>
          <li><FontAwesomeIcon icon={faGrinSquintTears} /></li>
          <li onClick={() => {undoSelect()}}><FontAwesomeIcon icon={faUndo} /></li>
        </FormListStyles>);
      break;
      case 3:
        return(<FormListStyles>
          <li><FontAwesomeIcon icon={faFrown} /></li>
          <li onClick={() => {undoSelect()}}><FontAwesomeIcon icon={faUndo} /></li>
        </FormListStyles>);
      break;


      default: setSelected = false;
      break;
    }
  }
  
};

const TextAreaInput = (props) => {
  return (
    <>
    </>
  );
};

export { FormTextInput, FormDDLInput, TextAreaInput };
