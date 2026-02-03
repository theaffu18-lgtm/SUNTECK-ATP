import exp from 'express'
import { userApp } from './APIs/user_api.js';
import { productApp } from './APIs/product_api.js';
import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';


const app = exp();

// Middleware
app.use(exp.json());
//add cookie parser middleware
app.use(cookieParser());

// Routes
app.use('/user-api', userApp);
app.use('/product-api',productApp)

// Port
const port = 4000;

// DB Connection
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragdb2');
        console.log("Database Connected Successfully");
        app.listen(port, () => {
            console.log("Server running on port 4000");
        });

    } catch (err) {
        console.log("DB Error:", err);
    }
}

// Call DB function
connectDB();


//error errorHandling middleware
app.use((err,req,res,next)=>
res.status(500).json({message:"error",error:err.message}))