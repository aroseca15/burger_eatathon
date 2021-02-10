$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log($('#newburger').val())
        let newBurger = {
            name: $("#newburger").val().trim(), eaten: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Burger added successfully!");
            location.reload();
        })
    });

    $(".chowDown").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        let stateEaten = {
            eaten: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: stateEaten
        }).then(function () {
            console.log("BELCH!");
            location.reload();
        });
    });

    // Client side DELETE:
    $(".compostBurger").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function () {
            console.log("Thank You for Composting. Save The Earth!");
            location.reload();
        });
    })

});