//@ts-check
/**
 * @module
 * @requires module:config/connection
 */

/**
 * Import MySQL connection
 * @name connection
 */
var connection = require("./connection");


/**
 * Loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string. 
 * ["?", "?", "?"].toString() => "?,?,?";
 * @param {number} num 
 */
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


/**
 * Helper function to convert object key/value pairs to SQL syntax
 * @function objToSql
 * @param {object} ob
 * @returns {string} 
 */
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

/**
 * Object for all our SQL statement functions.
 * @namespace orm
 * @type {object}
 * 
*/
var orm = {
    /**
     * Selects all records in the table and returns them
     * @memberof module:config/orm~orm
     * @inner
     * @param {string} table table name within MySQL
     * @param {function} cb Callback with result from MySQL query
     */
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    /**
     * Inserts new record into table
     * @memberof module:config/orm~orm
     * @inner
     * @param {string} table 
     * @param {Array<string>} cols Array with string values of columns to modify 
     * @param {Array<string>} vals Array with string values to be updated in columns
     * @param {function} cb Callback returns result object from MySQL query
     */
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

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
    // 
    /**
     * Updates one table column values based on condition (such as id=2), then callback
     * @memberof module:config/orm~orm
     * @inner
     * @param {string} table Table to be used in MySQL update
     * @param {object} objColVals Object with column/value pairs to be updated
     * @param {string} condition id=? reference to table index in MySQL
     * @param {function} cb Callback with result from MySQL query
     */
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

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
    // Created by Steven Bowler to add to orm functions, deleteOne function completes CRUD in orm.js
    //     connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function (err, result) {
    /**
     * @memberof module:config/orm~orm
     * @inner
     * @param {string} table Table name in MySQL database 
     * @param {object} objColVals Object with column name/value pairs 
     * @param {string} condition id=? reference to index in table
     * @param {function} cb Callback to return result
     */
    deleteOne: function (table, objColVals, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }



};

// Export the orm object for the model (cat.js).
module.exports = orm;
