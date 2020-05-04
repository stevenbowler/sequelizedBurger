//@ts-check
/**
 * Connection to MySQL database in Heroku or local
 * @module
 * @requires sequelize https://www.npmjs.com/package/sequelize Node.js package
 */

/**
 * NPM sequelize package
 * @name Sequelize
 * @type {*}
 */
var { Sequelize } = require("sequelize");

/**
 * @namespace sequelize
 */
var sequelize;


/**
 * @constant
 * @name configJson
 * @type {object}
 */
const configJson = require("./config.json");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(configJson.production.database, configJson.production.username, configJson.production.password, {
        host: configJson.production.host,
        port: 3306,
        dialect: configJson.production.dialect,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

} else {
    sequelize = new Sequelize(configJson.development.database, configJson.development.username, configJson.development.password, {
        host: configJson.development.host,
        port: 3306,
        dialect: configJson.development.dialect,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
}

// this works locally tested OK
// sequelize = new Sequelize("burgers_db", "root", "", {
//     host: "localhost",
//     port: 3306,
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }
// });


// Exports the connection for other files to use
module.exports = sequelize;
