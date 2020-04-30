//@ts-check
/**
 * @module
 * @requires express
 * @requires module:models/burger
 */

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================


/**
 * @name express
 */
var express = require("express");

/**
 * @name router
 */
var router = express();

/**
 * @name Burger
 */
var Burger = require("../models/burger.js");

// Routes
// =============================================================




// Get all burgers

/**
 * Basic route that sends the user first to the index.handlebars page with all MySQL records displayed
 * @function
 * @name get/
 * @memberof module:controllers/burgers_controller
 * @param {string} path - / to get you home.
 * @returns {URL} Returns url to index.handlebars
 */
router.get("/", function (req, res) {
    Burger.findAll({}).then(function (results) {
        var hbsObject = {
            burgers: results
        };
        res.render("index", JSON.parse(JSON.stringify(hbsObject)));  // res.render("index", hbsObject); // doesn't work
        // res.render("index", hbsObject); // doesn't work was used in non-sequelized version
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
    Burger.update({ devoured: req.body.devoured }, {
        where: {
            id: req.params.id
        }
    }).then(function (results) {
        console.log(results);
        if (results == 0) res.status(404).end();
        else res.status(200).end();
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
    Burger.update({ burger_name: req.body.burger_name }, {
        where: {
            id: req.params.id
        }
    }).then(function (results) {
        console.log(results);
        if (results == 0) res.status(404).end();
        else res.status(200).end();

        // res.json(results);
    });
});



/**
 * create a new burger
 * @function
 * @name post/api/burgers
 * @memberof module:controllers/burgers_controller
 * @param {string} path - /api/burgers
 * @returns {object} Returns unique id:insertID key/value pair of record added to to MySQL
 */
router.post("/api/burgers", function (req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (results) {
        res.json({ id: results.insertId });
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
    console.log("Burger ID:");
    console.log(req.params.id);
    Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.status(200).end();
    });
});

module.exports = router;
