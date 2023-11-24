import jwt from "jsonwebtoken"
import {createError} from "../utils/error.js"

export const verifyToken = (req,res, next)=>{

    //check if user has token
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "You are not authenticated"))
    }
    //verify if token is correct
    jwt.verify(token, process.env.JWT_SECRECT, (err, userInfo)=>{
        if(err) return next(createError(403, "Token is not valid"))
        req.user = userInfo
        next()
    })
}

export const verifyUser = (req,res, next)=>{
  verifyToken(req, res,next, ()=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        next();
    }else{
        return next(createError(403, "You are not authorized!"))
    }
  });
}

export const verifyAdmin = (req,res, next)=>{
  verifyToken(req,res,next, ()=>{
    if(req.user.isAdmin){
        next()
    }else{
        return next(createError(403, "You are not authorized!"))
    }
  });
}


