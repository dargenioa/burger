const connection = require("./connection");

const orm = {
    selectAll: function() {
        let query = ("SELECT * FROM burgers;")
        connection.query(query, function (err, res) {
            res.json({ burgers: data });
        });

    },
    insertOne: function(){

    },
    updateOne: function() {

    },
    deleteOne: function() {

    }

};

module.exports = orm;