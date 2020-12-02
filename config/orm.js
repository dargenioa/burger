const connection = require("./connection");

const orm = {
    all: function() {
        let query = ("SELECT * FROM burgers;")
        connection.query(query, function (err, res) {
            res.json({ burgers: data });
        });

    },

    create: function(){

    },
    update: function() {

    },

    delete: function() {

    }

};

module.exports = orm;