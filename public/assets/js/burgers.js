$(document).ready(function () {

    $.ajax("/burgers", {
        type: "GET"
    }).then(function (data) {
        console.log(data);
        let burgers = data.burgers;
        let length = data.burgers.length;
        let devoured = $("#devoured");
        let notDevoured = $("#not_devoured");
        let burgerEl;

        for (let i = 0; i < length; i++) {
            if (burgers[i].devoured) {
                burgerEl = `<li>
                ${burgers[i].id}. ${burgers[i].burger_name}
                <button class="btn btn-primary devour delete-burger" data-id="${burgers[i].id}"
                data-devoured="true">DELETE</button>`
                devoured.append(burgerEl);
            } else {
                burgerEl = `<li>
                ${burgers[i].id}. ${burgers[i].burger_name}
                <button class="btn btn-primary devour" data-id="${burgers[i].id}"
                data-devoured="false">DEVOUR</button>`
                notDevoured.append(burgerEl);
            }
        }
    })

    $(document).on("click", ".devour", function (event) {
        let id = $(this).data("id");
        let devoured = $(this).data("devoured") === false;

        const newDevourState = {
            devoured: devoured
        };
        //put request to update devour to true
        $.ajax("/burgers/" + id, {
            type: 'PUT',
            data: JSON.stringify(newDevourState),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function (result) {
            console.log(result);
            location.reload();
        });
    });

    $(document).on("click", ".delete-burger", function (event) {
        var id = $(this).data("id");
        $.ajax("/burgers/" + id, {
            type: 'DELETE'
        }).then(function (result) {
            console.log(result);
            location.reload();
        });
    });
});


