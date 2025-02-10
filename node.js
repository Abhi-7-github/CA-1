const express=require ("express")
require("dotenv").config()

const app=express()


app.post("/signup",async(req,res)=>{

    const {Username,Email,Password,DOB}=res.body

    try {
        if(!Email,!Password,!Username){
           res.status(404).send("Requried info")
        }
        else{
            res.status(200).send("Successful")
        }
    } catch (error) {
        console.log("Error 500")
    }
})

const port =process.env.PORT 

app.listen(port,async()=>{
    try {
        console.log(`app is running on http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
})