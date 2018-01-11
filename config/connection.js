var mySQL = require("mysql");

var connection = mySQL.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err){
        console.error("connection error: " + err.stack);
        return;
    }
    else{
        console.log("connected as id: " + connection.threadId);
    }
});

module.exports = connection;