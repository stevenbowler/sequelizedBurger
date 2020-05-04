//@ts-check
/**
 * @module
 * @requires sequelize
 * @requires module:config/connection
 */

// Dependencies
// =============================================================

/**  
 * Sequelize (capital) references the standard library {@link https://www.npmjs.com/package/sequelize} 
 * @name Sequelize
 * @external
*/
const { Sequelize, Op, Model, DataTypes } = require("sequelize");


/** 
 * sequelize (lowercase) references my connection to the DB.
 * @name sequelize
*/
var sequelize = require("../config/connection.js");


/**
 * Creates a "Book" model that matches up with DB
 * @namespace Burger
 *  */
var Burger = sequelize.define("sequelizedburgers", {
    burger_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN }
    // userId: Sequelize.DataTypes.INTEGER,
});


/**
 * Creates a User model for customers/users
 * @namespace User
 */
var User = sequelize.define("user", {
    // Giving the User model a name of type STRING
    username: { type: DataTypes.STRING, validate: { len: [1, 25] } },
});


/**
 * Creates many to one association between User and Burgers, User can have many Burgers ...
 * @function
 * @name .hasMany
 * @memberof module:models/oldburger~User
 * @param {Object} Burger
 */
User.hasMany(Burger, {
    as: "sequelizedburger",
    // foreignKey: "userId",
    // sourceKey: "userId",
    // onDelete: "cascade"
});



/**
 * Creates many to one association between User and Burgers, User can have many Burgers ...
 * @function
 * @name .belongsTo
 * @memberof module:models/oldburger~Burger
 * @param {Object} User
 */
Burger.belongsTo(User, {
    foreignKey: {
        name: "userId"
        // allowNull: false
    },
    targetKey: "id"
});


Burger.sync();
User.sync();


// Makes the Book Model available for other files (will also create a table)
module.exports = { Burger, User };
