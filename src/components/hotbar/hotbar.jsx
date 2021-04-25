import Button from "../btn/button"
import styled from 'styled-components'


const NAV = styled.nav `
padding: 1rem;
background-color: #d4e09b;
display:flex;
align-items: middle;
justify-content: center;
border-radius: 0 0 1rem 1rem;

button{
    padding: 1rem;
    font-size:2rem;
    color: #f6f4d2;
    font-family:'Kanit', sans-serif;
    background-color: #a44a3f;

    border-radius: 1rem;

    border-bottom: 1px dashed #a44a3f;

}
`

const HotBar = (props) => {
    return ( 
        <>
        <NAV>
            <Button label="all products"></Button>
        </NAV>
        </>
     );
}
 
export default HotBar;