import exp from 'express';
//create min-express (separate route) app
const userApp=exp.Router();
export {userApp};
//users API



let users=[]

userApp.get("/users",(req,res) =>{
    //send res to client
    res.status(200).json({message:"all users", playload:users})  
    
  })

  //post req handling route(create users)
  userApp.post("/users",(req,res)=>{
    let newUser=req.body;
    users.push(newUser);
    res.status(200).json({message:"user created"})
  })

  //put req handling route(update users)
  userApp.put("/users/:id",(req,res)=>{
    
    //get modified user from req
    let modifiedUser=req.body;
    console.log(modifiedUser);
    //find the user with id exists in array
    let userIndex=users.findIndex(userObj=>userObj.id===modifiedUser.id);
    //if user not found,send res as "user not found"
    if(userIndex===-1){
      return res.status(404).json({message:"user not found"})
    }

      //if user found,then modify the user 
      let deletedUser=users.splice(userIndex,1,modifiedUser)
      //send res as "user modified"
      res.status(200).json({message:"user modified"})
    
  })

  //read user by id
  userApp.get("/users/:id",(req,res)=>{
    console.log(req.params);
    //read id from url parameter
    let id=Number(req.params.id);
    //read user by this id
    let user=users.find(userObj=>userObj.id==id);
    if(!user){
      return res.status(404).json({message:"user not found"})
    }
    res.status(200).json({message:"user found",payload:user})

  });



  //delete req handling route(delete usres) 
  userApp.delete("/users/:id",(req,res)=>{
    let id=req.params.id;
    let userIndex=users.findIndex(user=>user.id===id);
    if(userIndex===-1){
      res.status(404).json({message:"user not found"})
    }
    else{
      users.splice(userIndex,1);
      res.status(200).json({message:"user deleted"})
    }
  })

