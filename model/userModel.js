import mongoose from "mongoose";


import {} from 'dotenv/config'
const uri = process.env.MONGO_URI
// const uri = "mongodb+srv://lakshdk26:RG802LAI581xsp4J@cluster0.cql388r.mongodb.net/CostcoUsers?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(()=>console.log("connected to Mongodb successfully******************"))
.catch((err)=>console.log(`NOt connected due to error below`))

const userSchema = mongoose.Schema({
    name: {type:String , required:true},
    email: {type:String , required:true},
    pwd : {type:String , required:true},
})

const userModel = mongoose.model('GeneralUsers',userSchema)

export  default userModel