//@ts-check
/**
 * @module
 * @requires express
 * @requires module:models/burger
 */


/**
 * @name express
 */
var express = require("express");

/**
 * @name burger
 */
var burger = require("../models/burger");

/**
 * @name router
 */
var router = express();




/**
 * Basic route that sends the user first to the index.handlebars page with all MySQL records displayed
 * @function
 * @name get/
 * @memberof module:controllers/burgers_controller
 * @param {string} path - / to get you home.
 * @returns {URL} Returns url to index.handlebars
 */
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



/**
 * create a new burger
 * @function
 * @name post/api/burgers
 * @memberof module:controllers/burgers_controller
 * @param {string} path - / to get you home.
 * @returns {sting} Returns unique insertID of record added to to MySQL
 */
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


/**
 * update a burger devoured boolean on the menu
 * @function
 * @name put/api/burgers/:id
 * @memberof module:controllers/burgers_controller
 * @param {string} path - / to get you home.
 * @returns {200 | 404} Returns status of request
 */
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


/**
 * Update a burger_name on the burgers table
 * @function
 * @name put/api/burger_name/:id
 * @memberof module:controllers/burgers_controller
 * @param {string} path - / to get you home.
 * @returns {200 | 404} Returns status of request
 */
router.put("/api/burger_name/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        burger_name: req.body.burger_name
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



/**
 * Delete burger from the devoured list 
 * @function
 * @name delete/api/burger_name/:id
 * @memberof module:controllers/burgers_controller
 * @param {string} path - / to get you home.
 * @returns {200 | 404} Returns status of request
 */
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.deleteOne({
    }, condition, function (result) {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


// Export routes for server.js to use.
module.exports = router;
