import express from "express"
import { createUser, deleteUser, getAllUsers, updateUser } from "../controller/userController.js"

const router = express.Router()

// create user
router.post("/",createUser)
//  get all Users
router.get("/",getAllUsers)
// update user
router.put("/:id",updateUser)
// delete user
router.delete("/:id",deleteUser)


export default router