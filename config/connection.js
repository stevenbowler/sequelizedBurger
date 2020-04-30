//@ts-check
/**
 * Connection to MySQL database in Heroku or local
 * @module
 * @requires sequelize https://www.npmjs.com/package/sequelize Node.js package
 */

/**
 * NPM sequelize package
 * @name Sequelize
 */
var Sequelize = require("sequelize");

/**
 * @namespace sequelize
 */
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("burgers_db", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Exports the connection for other files to use
module.exports = sequelize;
