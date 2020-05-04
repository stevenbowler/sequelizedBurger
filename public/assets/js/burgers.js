//@ts-check
/**
 * @module
 * @todo eliminate //@ts-ignore three occurences 30apr2020
 */

/**
 * Onclick event button "Devour Burger" based on id of element. 
 * Update boolean devoured in MySQL record for this id.
 * @function
 * @name .devourburger
 * @memberof module:public/assets/js/burgers
 * @event
 */
$(".devourburger").on("click", function (event) {
    event.preventDefault();
    console.log(`arrived at .devourburger onclick event`);
    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $(this).data("burgerid");
    var updatedBurger = { devoured: true };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedBurger
    }).then(
        function () {
            console.log("updated id ", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

/**
 * Onclick event button "Delete Burger" based on id of element. 
 * Delete MySQL record for this id.
 * @function
 * @name .deleteburger 
 * @memberof module:public/assets/js/burgers
 * @event
 */
$(".deleteburger").on("click", function (event) {
    // Get the ID from the button.
    // This is shorthand for $(this).attr("data-burgerid")
    var id = $(this).data("burgerid");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted id ", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});


/** 
 * Onclick event button "Create Burger", add to MySQL burgers table
 * Delete MySQL record for this id.
 * @function
 * @name #createburger 
 * @memberof module:public/assets/js/burgers
 * @event
 */
$("#createburger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // [name=burger] will find an element with a "name" attribute equal to the string "burger"
    var newBurger = {
        //@ts-ignore
        burger_name: $("#createburger [name=burger]").val().trim(),
        username: $("#createburger [name=username]").val().trim(),
        devoured: false
    };

    // Send the POST request.

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});


/** 
 * Onclick event button "Update a Burger" in to MySQL burgers table.
 * Update MySQL record for this id.
 * @function
 * @name #updateburger 
 * @memberof module:public/assets/js/burgers
 * @event
 */
$("#updateburger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    //@ts-ignore
    var id = $("[name=id]").val().trim();
    console.log(`id ${id}`);

    var updatedBurger = {
        //@ts-ignore
        burger_name: $("#updateburger [name=burger]").val().trim()
    };
    console.log(`updatedBurger ${updatedBurger}`);
    // Send the PUT request.
    $.ajax("/api/burger_name/" + id, {
        type: "PUT",
        data: updatedBurger
    }).then(
        function () {
            console.log("updated id ", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});
