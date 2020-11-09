const express = require("express")
const router = express.Router()



router.get("/login",(req,res)=> {
    res.render("login")
})


router.get("/protected",(req,res)=>{
    res.render("protected",{
        userid: res.us
    })
})
router.get("/",(req,res)=>{
    res.render("index",{
        title:"Title from router and HBS",
        helloworld:"Hello from router"
    })
})


module.exports ={
    router: router
}