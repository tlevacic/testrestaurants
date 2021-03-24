const mongoose = require("mongoose");

const listFoodShema = new mongoose.Schema({
    imgUrl:{
        type: String
    },
    price:{
        type: String
    },
    name:{
        type: String
    }
    ,
    orderName:{
        type: String
    },
    description:{
        type: String
    }
});

const ListFood = mongoose.model('foodList', listFoodShema);

module.exports = ListFood;