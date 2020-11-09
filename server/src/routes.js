const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    res.render("index",{
        title:"Title from router and HBS",
        helloworld:"Hello from router"
    })
})


module.exports ={
    router: router
}