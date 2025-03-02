import express from "express"
import {prisma} from "db/client"
const app=express()
app.get("/",async (req:any,res:any)=>{
    const user=await prisma.user.findMany({})
    return res.json({
        user,
        message:"This is nice"
    })
})
app.post("/add",async (req:any,res:any)=>{
    const user=await prisma.user.create({
        data:{
        username:"Biplov",
        password:"mrcool10"}
    })
    return res.json({
        user
    })
})
app.get("/users",async(req:any,res:any)=>{
    const users=await prisma.user.findMany({

    })
    return res.json({
        users
    })
})
app.listen(3000)