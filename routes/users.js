import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

// router.get("/checkAuth",verifyToken, (req, res, next)=>{
//    res.send("You are authenticated!")
// })

// router.get("/checkUser/:id",verifyUser, (req, res, next)=>{
//     res.send("Hello User You are loged in and can delete your account")
//  })

//  router.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("Hello Admin You are loged in and can delete accounts")
//  })

//GetAll
router.get("/", verifyAdmin, getAllUsers)

//Get single
router.get("/:id", verifyUser, getUser)

//Update
router.put("/:id", verifyUser, updateUser)

//Delete
router.delete("/:id",verifyUser, deleteUser )



export default router