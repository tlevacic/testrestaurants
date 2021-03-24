const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const RestaurantsModel = require("../models/modelRes");
const ListFoods = require("../models/modelForListFood");

router.get("/orderfood", (req, res) => {
  ListFoods.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
router.post("/orderfood", (req, res) => {
  const data = req.body;

  const newListFood = new ListFoods(data);

  newListFood.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, internal server errors" });
      return;
    }
    return res.json({
      msg: "Your data has been saved!!!!!!",
    });
  });
});

// Routes for restaurants
router.get("/", (req, res) => {
  RestaurantsModel.find({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.route("/restaurant/:id").get((req, res) => {
  RestaurantsModel.findById(req.params.id)
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(400).json("Error: " + err));
});

//routes for foodOrder

router.delete("/deleteOrder", (req, res) => {
  ListFoods.deleteOne({ _id: mongoose.Types.ObjectId(req.body.id) })
    .then((e) => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
