import User from "../models/userModels.js"

// create Users
export const createUser = async (req, res)=>{
    try {
        const { name,address,email } = req.body
        if(!name || !address || !email){
            return res.status(201).json({message : "All fields required"})
        }

        const newUser = await User.create({name,address,email})
        res.status(201).json(newUser)
   
    } catch (error) {
         res.status(500).json({error : "ERROR OCCURS"})
    }
}
// get all Users
export const getAllUsers = async (req , res)=>{
    try {
        const users =await User.find()
        if(users.length === 0) {
            return res.status(404).json({message : "No Users available"})
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message : "ERROR OCCURS", error})
    }
}
// update user
export const updateUser = async (req, res)=>{
    try {
        const id =req.params.id
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message : "Users not available"})
        }
        const update= await User.findByIdAndUpdate(
            id,
            req.body,
            {new : true}
        )
        res.status(200).json(update)
    } catch (error) {
       res.status(500).json({message : "ERROR OCCURS", error}) 
    }
}
// delete user
export const deleteUser = async(req, res) =>{
    try {
        const id =req.params.id
        const userExist = await User.findOne({_id:id})
        if(!userExist){
            return res.status(404).json({message : "Users not available"})
        }
        await User.findByIdAndDelete(id)
       res.status(200).json({message : "User delete successfully"})
    } catch (error) {
          res.status(500).json({message : "ERROR OCCURS", error}) 
    }
}