import express from "express";
import connect from "./utils/db.js";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import productsRoute from "./routes/products.js";

const app = express();

//middlewares
app.use(express.json())

//Routes middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute)
app.use("/api/products", productsRoute)

//error messages
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
        });
});

app.listen(8800,()=>{
    connect();
 console.log("Backend Connected!")
});