//@ts-check
/**
 * Connection to MySQL database in Heroku or local
 * @module
 * @requires mysql https://www.npmjs.com/package/mysql Node.js package
 */

/**
 * @name mysql
 * @external
 */
var mysql = require("mysql");

/**
 * @name connection
 */
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
