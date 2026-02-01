 import exp from 'express';
 const productApp=exp.Router();
 export {productApp};
 
 
 
 //products API
let products=[]

productApp.get("/products",(req,res)=>{
  res.status(200).json({message:"all products",payload:products})
})

//get product by id
productApp.get("/products-id/:id",(req,res)=>{
  let id=Number(req.params.id);
  let product=products.find(productObj=>productObj.id===id);

  
    //read id from url parameter
    if(!product){
      return res.status(404).json({message:"product not found"})
    }
    
    //read product by this id
    res.status(200).json({message:"product found",payload:product})


  });



//get products by brand
productApp.get("/products-name/:name",(req,res)=>{
  let name=req.params.name;
  let productsByName=products.filter(productObj=>productObj.name===name);
  if(productsByName.length===0){
    return res.status(404).json({message:"product not found"})
  }
  res.status(200).json({message:"products by brand",payload:productsByBrand})
})

productApp.post("/products",(req,res)=>{
  let newProduct=req.body;
  products.push(newProduct);
  res.status(200).json({message:"product created"})
})

productApp.put("/products/:productId",(req,res)=>{
  let modifiedProduct=req.body;
  console.log(modifiedProduct);
  let productIndex=products.findIndex(productObj=>productObj.productId===modifiedProduct.productId);
  if(productIndex===-1){
    return res.status(404).json({message:"product not found"})
  }
  let deletedProduct=products.splice(productIndex,1,modifiedProduct)
  res.status(200).json({message:"product modified"})
})  
productApp.delete("/products/:productId",(req,res)=>{
  let productId=req.params.productId;
  let productIndex=products.findIndex(product=>product.productId===productId);
  if(productIndex===-1){  
    res.status(404).json({message:"product not found"})
  }   
  else{
    products.splice(productIndex,1);
    res.status(200).json({message:"product deleted"})
  } 
})