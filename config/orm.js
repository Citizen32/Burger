var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callback){

        var queryString = 'SELECT * FROM ' + table + ';';

        connection.query(queryString, function(err, result){
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function(table, cols, value, callbacks){

        var queryString = 'INSERT INTO ' + table + '('+ cols +')' + "VALUES(' "[vals] + " ')";
        console.log(queryString);
        
        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            callback(result);
        });
    },

    updateOne: function(table, colName, burgerId, callback){

        var queryString = "UPDATE " + table + " SET" + colName + "=1 " + " WHERE id=" + burgerId;
        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err) throw err;
            callback(result);
        });
    },

    deleteOne: function
}