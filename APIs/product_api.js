import exp from 'express'

import { ProductModel } from '../models/productModel.js'

import { get } from 'mongoose';

export const productApp = exp.Router();

productApp.get('/products',async(req,res)=>
{
    try
    {
      const products=await ProductModel.find();
      res.status(200).json({message:"all products",payload:products})
    }
    catch(err)
    {
        res.status(500).json({
            message:"error :",payload:err
        })
    }
})


productApp.post('/products',async(req,res)=>
{
    let product=req.body
    let newProductDoc=new ProductModel(product)
    await newProductDoc.save()
    res.status(200).json({message:"product is added",payload:newProductDoc})
})

productApp.put('/products/:id',async(req,res)=>
{
    let objId=req.params.id
    let modifiedProduct=req.body

    let latestProduct=await ProductModel.findByIdAndUpdate(objId,{$set:{...modifiedProduct}},{new:true,runValidators:true})

    res.status(200).json({message:"product is updated",payload:latestProduct})
})


productApp.get('/products/:id',async(req,res)=>
{
    let objId=req.params.id
    try
    {
      const product=await ProductModel.findById(objId);
      res.status(200).json({message:"product found",payload:product})
    }
    catch(err)
    {
        res.status(500).json({
            message:"error :",payload:err.message
        })
    }


})

productApp.delete('/products/:id',async(req,res)=>
{
    let objId=req.params.id
    try{
    let deletedProduct=await ProductModel.findByIdAndDelete(objId)

    res.status(200).json({message:"product is deleted",payload:deletedProduct})
    }
    catch(err)
    {
        res.status(404).json({message:"error",payload:err.message})
    }
})