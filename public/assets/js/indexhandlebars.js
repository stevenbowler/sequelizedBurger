$(".devourburger").on("click", function (event) {
    event.preventDefault();

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


// Create a new burger
$("#createburger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // [name=burger] will find an element with a "name" attribute equal to the string "burger"
    var newBurger = {
        burger_name: $("#createburger [name=burger]").val().trim(),
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

// Update burger_name
$("#updateburger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $("[name=id]").val().trim();
    console.log(`id ${id}`);

    var updatedBurger = {
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