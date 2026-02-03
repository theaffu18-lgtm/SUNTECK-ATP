import { Schema,model } from "mongoose";

//create user schema 
const userSchema=new Schema(
    {
        username:{
            type:String,
            required:[true,"Username is required"],
            minLength:[4,"min lenght should be 4"],
            maxLength:[8,"max length should be exceeded"]
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        age:{
            type:Number,
            required:[true,"age is required"],
            min:[18,"minimum 18"],
            max:[25,"max is 25"]
        },
       
    }, 
    {
        timestamps: true
    },
    {
        strict: true
    }

    
)
//create user model with that schema
export const UserModel=model("user",userSchema)