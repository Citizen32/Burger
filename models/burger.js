// REQUIRE ORM ===============================
var orm = require("../config/orm.js");

// EXPORTING OBJECT ==========================
var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(result){
            callback(result);
        });
    },
    
    insertOne: function(table, cols, vals, callback){
        orm.insertOne("burgers", cols, vals, function(result){
            callback(result);
        });
    },

    updateOne: function(table, colName, burgerId, callback){
        orm.updateOne("burgers", colName, burgerId, function(result){
            callback(result);
        });
    },

    deleteOne: function(table, burgerId, callback){
        orm.deleteOne("burgers", id, function(result){
            callback(result);
        });
    }
}

module.exports = burger;