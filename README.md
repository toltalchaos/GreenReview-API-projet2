***review app create api***
**to do**
- [x] create error logic for unselected SVGs (could use better error code)
- [x] create a cancel button to go back to form page
- [x] create confirmed notice page (this page/module to hold object + interface)
- [x] create confirm logic (INTERFACES RTDB)
- [x] create all product view page (_abandoned new product page for rerouting to app_)
- [x]  create new credentials for non test user
- [x] delete auto credentials (require login)
- [x]  create test user logic to not interface RTDB (message to user on error code return)

- [x] edit review page to use new API

- [x] manage icons 


# deployed at
**https://doc-review-green.web.app/**

deployment test credentials - will not interface RTDB properly -
test@test.test
123456

# API available at 
**https://doc-review-green-default-rtdb.firebaseio.com/products.json**
see firebase RTDB for documentation 



### purpose
the purpose of this app is to provide a way to use firebase authentication to host a service to easily fill reviews for products and save to the firebase RTDB system. 
the seperate application (https://greenreview.netlify.app/?productID=CNB-01300628) uses the API to populate its view using GET requests in the URL to dynamically populate the web page based on Json data received from the firebase Database.

#### note:
.gitignore file includes firebase credential file and firebase config file. 






### refrence links

https://firebase.google.com/docs/reference/rest/database

https://firebase.google.com/docs/database/security

https://reactjs.org/docs/create-a-new-react-app.html

https://console.firebase.google.com/u/0/project/doc-review-green/overview

https://fontawesome.com/how-to-use/on-the-web/using-with/react


### color pallate + font pallate

``` css
/* global mobile styles */
:root{
    --mainColor: #f6f4d2;
    --secondColor: #d4e09b;
    --mainTextColor: #283d3b;
    --secondTextColor: #a44a3f;
    /* font family */
    --MainFontstack:'Josefin Sans', sans-serif; 
    --secondFontStack: 'Kanit', sans-serif;
}
```
