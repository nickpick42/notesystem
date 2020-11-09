const LocalStrategy = require("passport-local").Strategy

let user = {
    id: 1,
    username: "nick",
    password: "testing"
}



const initilizePassport = ( passport )=>{

    passport.use(new LocalStrategy({
        usernameField: "username",
        passwordField: "password"
    },(username,password,done) =>{
        if ( username === user.username  && password === user.password ){
            done(null,user,{message:"success"})
        }else{
            done(null,false,{message: "failed"})
        }

    })

    )
    passport.serializeUser((user,done)=>{

    })
    passport.deserialize((user,done)=>{
        return
    })


}

module.exports ={
    initilizePassport: initilizePassport
}