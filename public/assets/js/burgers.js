$(document).ready(function () {

    $.ajax("/burgers", {
        type: "GET"
    }).then(function (data) {
        let burgers = data.burgers;
        let length = data.length;
        let devoured = $("#devoured");
        let notDevoured = $("#not_devoured");

        for (let i = 0; i < length; i++) {
            let burgerEl = `<div><li>
            ${burgers[i].id} ${burgers[i].burger_name}
            <button class="btn btn-primary" data-id="${burgers[i].id}"
            data-devoured="${burgers[i].devoured}">`

            if (burgers[i].devoured) {
                burgerEl += "DELETE";
            } else {
                burgerEl += "DEVOUR";
            }

            burgerEl += "</button>"
            burgerEl += `<button class= delete" data-id="${burgers[i].id}">DELETE</button><li></div>`;

            if (burgers[i].devoured) {
                devoured.append(burgerEl);
            } else {
                notDevoured.append(burgerEl);
            }
        }
    })
});