import exp from 'express'
import { UserModel } from '../models/usermodel.js';     
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken} from '../middleware/verifytoken.js';




export const userApp = exp.Router();

userApp.get('/users', async (req, res) => {

    try {
        // Wait for DB result
        const users = await UserModel.find();

        // Send response
        res.status(200).json({
            message: "All users",
            payload: users
        });

    } catch (err) {
        res.status(500).json({
            message: "Error fetching users",
            error: err.message
        });
    }
});

//create user

userApp.post('/users',async(req,res)=>
{
    let newUser=req.body
//hash the password
    let hashedPassword=await hash(newUser.password,12)
    //replace plain password with hashed password
    newUser.password=hashedPassword;
    let newUserDoc=new UserModel(newUser)
    await newUserDoc.save()

    res.status(201).json({message:"user is created",payload:newUserDoc})
})

// user authentication(login) route
userApp.post('/auth',async(req,res)=>
{
    //get user cred obj
    let userCred=req.body;
    //check for username
    let userOfDB=await UserModel.findOne({username:userCred.username});
    //if user not found
    if(userOfDB===null){
        return res.status(404).json({message:"invalid username"})
    }
    //compare passwords
    let status=await compare(userCred.password,userOfDB.password);
    //if password not match
    if(status===false){
        return res.status(404).json({message:"invalid password"})
    }
    //create signed token
    let signedToken=jwt.sign({username:userCred.username},'secret',{expiresIn:30});
    //SAVE token as httpOnly cookie
    res.cookie('Token',signedToken,{httpOnly:true, //it is httpOnly cookie
        secure:false,sameSite:'lax'});
    //send token in response
    res.status(200).json({message:"login success"});
});

//read user by id
userApp.get('/users/:id',async(req,res)=>
{
    let userId=req.params.id;
    //find user
    let userObj=await UserModel.findById(userId)

    res.status(200).json({message:"user",payload:userObj})
})

//update the user document
userApp.put('/users/:id',async(req,res)=>{
    let objId=req.params.id

    let modifiedUser=req.body

    let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true,runValidators:true})

    res.status(200).json({message:"user updated",payload:latestUser})
})

//delete user by id
userApp.delete('/users/:id',async(req,res)=>
{
    let userObj=req.params.id

   let deletedUser= await UserModel.findByIdAndDelete(userObj)

   res.status(200).json({message:"user is deleted",payload:deletedUser})
})

//test route
userApp.get('/test',verifyToken, (req, res) => {
    res.status(200).json({message:"test route"});
});
