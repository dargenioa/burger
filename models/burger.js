const orm = require("../config/orm");

const burgers = {
    //call to orm.all passing burgers table
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        //call to orm.create passing burgers table
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        })
    },

    update: function (objColVals, condition, cb) {
        //call to orm.update passing burgers table
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        })
    },

    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res){
            cb(res);
        })
    }

};

//export to the controller burgers_controller.js
module.exports = burgers;