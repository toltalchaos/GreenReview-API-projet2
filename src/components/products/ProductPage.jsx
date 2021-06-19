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


    if(auth.authenticate){
        console.log("authenticated")
        database.ref().child('products').get().then((snapshot) => {
            let products = snapshot.val();
            console.log(products)
           //products object returned
            

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