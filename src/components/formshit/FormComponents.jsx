import React from "react";
import styled from "styled-components";

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
  return <></>;
};

export { FormTextInput, FormDDLInput };
