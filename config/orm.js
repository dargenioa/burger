const connection = require("./connection");

const selectAll = () => {
    let query = ("SELECT * FROM burgers;")
    connection.query(query, function (err, res) {
      console.log(res)
    });
};

const insertOne = () => {

};

const updateOne = () => {

};

const deleteOne = () => {

};

module.exports = selectAll, insertOne, updateOne, deleteOne;