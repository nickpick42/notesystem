const mysql = require("mysql2")


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@KaisGrapefruit123",
    database: "notes_system",

})
connection.connect((error)=>{

    if ( error != null ){
        console.log(error)
    }else{
        console.log("Successfully connected to notes database")
    }

})
