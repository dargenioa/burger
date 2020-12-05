const connection = require("./connection");

// the number of ? needed in the mysql syntax is passed and the function returns and array of '?' that will print as a string
const printQuestionMarks = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// function to convert object key/value pairs to SQL syntax that takes an object as a parameter
function objToSql(ob) {
    let arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations
            if (typeof value === "string") {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ORM object
// cb = callback
const orm = {
    // select all burgers
    all: function (tableInput, cb) {
        // SELECT 8 FROM burgers;
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // create a new burger: INSERT INTO burgers
    create: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
    // INSERT INTO burgers(burger_name, devoured) VALUES (?, ?);
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    //update burgers
    update: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
        // UPDATE burgers SET ["burger_name='New Burger'"] WHERE id = req.params.id;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        // DELETE FROM burgers WHERE id = req.params.id
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    
};

// export the ORM to the model burgers.js
module.exports = orm;

