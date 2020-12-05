const dotenv =require('dotenv').config();
const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASSWORD,
        database: process.env.LOCAL_DB_DATABASE
    });
};

    connection.connect((err) => {
        if (err) {
            console.error(`error connecting: ${err.stack}`);
            return;
        }
        console.log(`connected as id ${connection.threadId}`);
    });
    
    module.exports = connection;