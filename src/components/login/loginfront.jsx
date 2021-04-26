import React, { useState, useContext }  from "react";
import styled from "styled-components";
import {Button} from "../btn/button";
import { FormTextInput } from "../formshit/FormComponents";
import{Redirect}from 'react-router-dom';

import firebaseApp from './../../firebase/firebaseConfig';
import AuthContext, {AuthProvider} from './../../auth/AuthContext';
import ErrorMsg from "../errorMSG/ErrorMsg";


const LOGINPAGE = styled.div`
  background-color:  #d4e09b;
  border-radius: 1rem;
  margin: 1rem;
  div{
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
  }
  h1{
    margin: 1rem 0 0 0 ;
    color:#a44a3f;
  }
  button{
    padding: 1rem;
    margin-bottom: 2rem;
    font-size:2rem;
    color:  #f6f4d2;
    font-family:'Kanit', sans-serif;
    background-color:  #a44a3f;

    border-radius: 1rem;

    border-bottom: 1px dashed #a44a3f;

}
  
`;

const LoginFrontpage = (props) => {
//hooks
const auth = useContext(AuthContext);

//state hooks
const [email, setEmail] = useState("");
 const [msg, setmsg] = useState("");
const [password, setPassword] = useState("");

const [isValid, setisValid] = useState(false);


function checkErrors(badmsg){
  if(badmsg !== ""){
    setmsg(badmsg);
    setisValid(false);
  }
}


      //'test@test.test', '123456'
    function loginUser (e) {
        console.log("login button pressed");
        console.log(email, password);
        //use email and pass state obj to find in firebase uid.
        //if uid is found set uid state in authcontext 
        firebaseApp.auth()
        .signInWithEmailAndPassword(email, password).then((returnedCreds) => {
          console.log(returnedCreds.user.uid);
          //set uid in authcontext 
          //set valid to true 
          auth.uid= returnedCreds.user.uid;
          auth.authenticate = true;

          setisValid(true);

        })
        .catch((badcreds) => {

          //USE STATE ON THE COMPONENT CALL METHOD HERE INSTEAD OF ASSIGNING AGAIN
          //PASS IN THE ERROR TO THE METHOD TO CHANGE STATE INSTEAD OF CALLING METHOD IN DOM 
          checkErrors(badcreds.message);
          // console.log(badcreds.message);
        })
        
        
    }
  
  if(isValid){
    {
    return(<Redirect to="/dashboard"/>);}
  }
  else{ return (
   
      <LOGINPAGE>
        <div>
          <h1>LOGIN</h1>
          <ErrorMsg msg={msg}/>

          <FormTextInput
            id={"user-email"}
            label={"Email"}
            inputType={"email"}
            name={"user-email"}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
          <FormTextInput
            id={"user-pass"}
            label={"Password"}
            inputType={"password"}
            name={"user-pass"}
            onChange={(e) => setPassword(e.target.value.trim())}
          />

          <Button label={"Login"} onClick={loginUser}/>
        </div>
      </LOGINPAGE>
    
  );}

 
};

export default LoginFrontpage;
