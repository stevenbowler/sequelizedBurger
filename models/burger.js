//@ts-check
/**
 * @module
 * @requires sequelize
 * @requires module:config/connection
 */

// Dependencies
// =============================================================

/**  
 * Sequelize (capital) references the standard library 
 * @name Sequelize
 * @external
*/
var Sequelize = require("sequelize");


/** 
 * sequelize (lowercase) references my connection to the DB.
 * @name sequelize
*/
var sequelize = require("../config/connection.js");

/**
 * Creates a "Book" model that matches up with DB
 * @namespace Burger
 *  */
var Burger = sequelize.define("burgers", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

// Syncs with DB
Burger.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Burger;
