//@ts-check
/**
 * @module
 * @requires express
 * @requires express-handlebars
 * @requires module:controllers/burgers_controller
 */

/**
 * ExpressJS package
 * @name express
 * @external
 */
var express = require("express");

/**
 * @name PORT
 */
var PORT = process.env.PORT || 8080;

/**
 * app reference for express()
 * @name app
 */
var app = express();


//Middleware


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// enable urlencoding in express calls to simplify url syntax
app.use(express.urlencoded({ extended: true }));

// enable json parsing of strings
app.use(express.json());

// Set root/public as base reference for express
app.use(express.static("public"));


/**
 * handlebars
 * @name exphbs
 * @external
 */
var exphbs = require("express-handlebars");


// set display engine to handlbars starting at main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


/**
 * Import routes and give the server access to them.
 * @name routes
 * @memberof module:controllers/burgers_controller
 */
var routes = require("./controllers/burgers_controller.js");

/** Leave base route at "/" as route to routes module */
app.use(routes);


// initiate server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
