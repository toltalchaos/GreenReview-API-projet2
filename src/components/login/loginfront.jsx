import React from "react";
import styled from "styled-components";
import Button from "../btn/button";
import { FormTextInput } from "../formshit/FormComponents";

const LOGINPAGE = styled.div`
  background-color:  #d4e09b;
  border-radius: 1rem;
  margin: 1rem;
  padding: 2rem;
  div{
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
  }
  button{
    padding: 1rem;
    font-size:2rem;
    color: #d4e09b;
    font-family:'Kanit', sans-serif;
    background-color:  #a44a3f;

    border-radius: 1rem;

    border-bottom: 1px dashed #a44a3f;

}
  
`;

const LoginFrontpage = (props) => {


      //'test@test.test', '123456'
    function loginUser (e) {
        console.log("login button pressed");
        
        
    }


  return (
    <>
      <LOGINPAGE>
        <div>
          <FormTextInput
            id={"user-email"}
            label={"Email"}
            inputType={"email"}
            name={"user-email"}
          />
          <FormTextInput
            id={"user-pass"}
            label={"Password"}
            inputType={"password"}
            name={"user-pass"}
          />

          <Button label={"Login"} onClick={loginUser}/>
        </div>
      </LOGINPAGE>
    </>
  );
};

export default LoginFrontpage;
