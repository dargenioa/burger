const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    res.json({ burgers: data });
  })
});

router.post("/burgers", function (req, res) {
  burger.create([
    // try req.body.burger_name
    // review cats.js
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res){
  let condition = `id = ${req.params.id}`;

  console.log(condition);

  burger.update({
    burger_name: req.body.burger_name,
    //devoured doesn't change, so can be moved
    devoured: req.body.devoured
   }, condition, function (result) {
     if (result.changedRows == 0) {
       return res.status(404).end();
     } else {
       res.json({ id: req.params.id });
     }
   });
});

router.delete("/burgers/:id", function (req, res) {
  let condition = `id = ${req.params.id}`;

  burger.delete(condition, function(result){
    if (result.affectedRow == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
