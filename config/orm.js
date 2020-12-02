const connection = require("./connection");

const orm = {
    //all
    selectAll: function() {
        let query = ("SELECT * FROM burgers;")
        connection.query(query, function (err, res) {
            res.json({ burgers: data });
        });

    },
    //create
    insertOne: function(){

    },
    //update
    updateOne: function() {

    },
    //delete
    deleteOne: function() {

    }

};

module.exports = orm;