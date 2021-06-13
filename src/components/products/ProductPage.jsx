import React, { useContext, useState }  from 'react';
import AuthContext from "./../../auth/AuthContext";

import firebaseApp from './../../firebase/firebaseConfig';
import ProductCard from './ProductElement';

const ProductPage = (props) => {
    //on page load interface rtdb for DB items object in "products"
    //populate page with objects

    //if authenticated - load page with edit fields
    const auth = useContext(AuthContext);
    var database = firebaseApp.database();

    function CreateProductElement(product){
        //create a react element based on the product being passed
    }

    if(auth.authenticate){
        database.ref().child('products').get().then((snapshot) => {
            let products = snapshot.val();
            let productElements = products.map(product => {
                // let productElement = CreateProductElement(product);
                let productElement = <ProductCard/>
                 console.log(productElement);
                return productElement;
              });
            
            //populate elements
            

            console.log(productElements);
            //print to dom
            return ( 
                <>
                <h1>auth PRODUCTPAGE</h1>
                {/* {productElements} */}
                </>
             );

        })
    }
    //if !auth - load page without edit fields
    else{
        return ( 
            <>
            <h1> not auth PRODUCTPAGE</h1>
            </>
         );
    }


   
}
 
export default ProductPage;