//@ts-check
/**
 * @module
 */

/**
 * Import MySQL connection
 * @requires connection
 */
var connection = require("./connection");


// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
/**
 * 
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
 * @param {*} ob
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
 * @name orm
 * @type {object}
 * 
*/
var orm = {
    /**
     * Selects all records in the table and returns them
     * @function orm.selectAll
     * @memberof config/orm
     * @inner
     * @param {*} tableInput 
     * @param {*} cb 
     */
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    /**
     * Inserts new record into table
     * @function orm.insertOne
     * @inner
     * @param {*} table 
     * @param {*} cols 
     * @param {*} vals 
     * @param {*} cb 
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
     * @function orm.updateOne
     * @inner
     * @param {*} table 
     * @param {*} objColVals 
     * @param {*} condition 
     * @param {*} cb 
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
     * @function orm.deleteOne
     * @inner
     * @param {*} table 
     * @param {*} objColVals 
     * @param {*} condition 
     * @param {*} cb 
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
