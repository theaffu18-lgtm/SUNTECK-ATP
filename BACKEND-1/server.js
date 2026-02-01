  //create HTTP server
  //import express module
  import exp from 'express';
  import {userApp} from './APIs/userapi.js';
  import {productApp} from './APIs/productapi.js';
  //create server
  const app=exp();
  //Assign port number
  app.listen(3000,()=> console.log('HTTP server listening on port 3000..'));
//body parsing middleware
  app.use(exp.json());

//forward request to userapp when path starts with /user-api

app.use("/user-api",userApp);
//forward request to productapp when path starts with /product-api

app.use("/product-api",productApp);
