//@ts-check
/**
 * @module
 * @requires module:config/orm
 */

/**
 * @name orm
 */
var orm = require("../config/orm");

/**
 * @namespace burger
 * @memberof module:models/burger
 */
var burger = {
    /**
     * Selects all records in table burgers and returns them
     * @memberof module:models/burger.burger
     * @param {function} cb Callback with response from MySQL query 
     */
    selectAll: function (cb) {
        orm.selectAll("burgers", function (response) {
            cb(response);
        });
    },
    /**
     * Inserts one record in table, the variables cols and vals are arrays. 
     * @memberof module:models/burger.burger
     * @param {Array<string>} cols Array of columns in burgers table
     * @param {Array<string>} vals Array of values in burgers table
     * @param {function} cb Callback with response from MySQL query 
     */
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (response) {
            cb(response);
        });
    },
    /**
     * Updates one record in table in columns specified based on condition
     * @memberof module:models/burger.burger
     * @param {object} objColVals Object with column name/key and value to be updated
     * @param {string} condition String that follows "WHERE" in MySQL query
     * @param {function} cb Callback with response from MySQL query 
     */
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (response) {
            cb(response);
        });
    },
    /**
     * Delete one record from table where condition is met
     * @memberof module:models/burger.burger
     * @param {object} objColVals Object with column name/key and value to be deleted
     * @param {string} condition String that follows "WHERE" in MySQL query
     * @param {function} cb Callback with response from MySQL query 
     */
    deleteOne: function (objColVals, condition, cb) {
        orm.deleteOne("burgers", objColVals, condition, function (response) {
            cb(response);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
