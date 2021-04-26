import React from 'react';
import styled from 'styled-components'

const ERROR = styled.div`
h3{
    font-size:3rem;
    color:tomato;
    text-align: center;
}


`

const ErrorMsg = (props) => {
    return ( 
        <ERROR>
       
            <h3>{props.msg}</h3>

        </ERROR>
     );
}
 
export default ErrorMsg;