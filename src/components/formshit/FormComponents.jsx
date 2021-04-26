import React, {useState} from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
  

  function dropdownclick(evnt) {
    
  }
  function selectsvg(selected) {
    //try create a stateful component "selected" when false return dropdown, when true, return selected?
    setChosen = selected;
    setSelected = true;
    
  }


if(selected == false){
  return (
    <div className="dropdown">
      <button className="drpbtn" onClick={dropdownclick}>select</button>
      <div className="ddl">
          <button onClick={selectsvg(1)}><FontAwesomeIcon icon={faCoffee} /></button>
          
      </div>
    </div>
    
  );
}
  else{
    switch(chosen){
      case 1: 
        return (<FontAwesomeIcon icon={faCoffee} />);
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
