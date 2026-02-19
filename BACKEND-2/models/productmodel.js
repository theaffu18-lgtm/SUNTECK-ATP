import { Schema,Model, model } from "mongoose";

const productSchema=new Schema(
    {
        pid:{
            type:Number,
            required:[true,"product Id is required"],
        },
        productName:{
            type:String,
            required:[true,"product name is required"]
        },
        price:{
            type:Number,
            required:[true,"price is required"],
            min:[2000,"minimum is 2000"],
            max:[50000,"maximum is 50000"]
        }

    }
)

export const ProductModel=model("product",productSchema)