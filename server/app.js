const express = require("express")
const paths = require("path")
const handlebars = require("hbs")
const router = require("./src/routes")

const views = (paths.join(__dirname,"/views"));
const partials = paths.join(__dirname,"/views/partials")


const server = express()
handlebars.registerPartials(partials)

server.use(express.static(views))
server.use(router.router)
server.set("view engine","hbs")
server.set("views",views)




server.listen(3000,()=>{
    console.log("Server is on")
})