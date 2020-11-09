const express = require("express")
const paths = require("path")
const handlebars = require("hbs")
const router = require("./src/routes")
const passport = require("passport")
const session = require("express-session")
const flash = require("express-flash")
const passportInit = require("../loginutils/loginutils")



const views = (paths.join(__dirname,"/views"));
const partials = paths.join(__dirname,"/views/partials")


const server = express()
handlebars.registerPartials(partials)

server.use(express.static(views))
server.use(router.router)
passportInit.initilizePassport(passport)
server.use(session({
    secret:"private key",
    resave:false,
    saveUninitialized:false,


}))
server.use(passport.initialize())
server.use(session())




server.set("view engine","hbs")
server.set("views",views)


server.post("/login",passport.authenticate("local",{
    successRedirect:"/protected"
}))



server.listen(3000,()=>{
    console.log("Server is on")
})