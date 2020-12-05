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
                <button class="btn btn-primary devour" data-id="${burgers[i].id}"
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

    $(document).on("click", ".devour", function(event){
        let devoured = $(this).data("devoured");
        let id = $(this).data("id");

       console.log(devoured);
        //if devoured=true then delete
        //if devoured = false then devoured=true

        if (devoured) {
            //make delete request
            $.ajax({
                url: "/burgers/" + id,
                type: 'DELETE',
                success: function(result) {
                    location.reload();
                    // Do something with the result
                }
            });

        } else {
            //put request to update devour to true
            $.ajax({
                url: "/burgers/devour/" + id,
                type: 'PUT',
                success: function(result) {
                    location.reload();
                    // Do something with the result
                }
            });
        }

    })

});

