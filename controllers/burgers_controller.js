//@ts-check
/**
 * @module
 * @requires express
 * @see {@link https://www.npmjs.com/package/express}
 * @requires module:models/burger
 * @todo line 54, why can't pass hbsObject, currently using JSON.parse(JSON.stringify(hbsObject)), fix.
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
 * call in sequelize database models
 * @name db
 */
// var db = require("../models");
var { Burger, User } = require("../models/oldburger");

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
    Burger.findAll({ include: User }).then(function (results) {
        // only with sequelize, it restates devoured from boolean to string, fails handlebars conditional render.
        for (var i = 0; i < results.length; i++) if (results[i].devoured == 0) results[i].devoured = false;
        var hbsObject = {
            burgers: results
        };
        console.log('results');
        // console.log(results[6].user.username);
        // console.log(`devoured: ${results[1].devoured}`);
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
 * create a new burger and user
 * @function
 * @name post/api/burgers
 * @memberof module:controllers/burgers_controller
 * @param {string} path - /api/burgers
 * @returns {object} Returns unique id:insertID key/value pair of record added to to MySQL
 */
router.post("/api/burgers", function (req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    // create user record, before creating burger order record
    User.findOrCreate({
        where: {
            username: req.body.username
        },
        defaults: { username: req.body.username }
    }).then(function (userResults) {
        // if found or created user, then create burger with id
        // console.log(userResults[0].id);
        Burger.create({
            burger_name: req.body.burger_name,
            userId: userResults[0].id,
            devoured: req.body.devoured
            // 
        }).then(function (burgerResults) {
            res.json({ id: burgerResults.id });
        });

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
