const Button = (props) => {
    return ( 

        <>
        <button {...props}>
            {props.label}
            {props.children}
        </button>
        </>

     );
}
 
export default Button;