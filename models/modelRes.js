const mongoose = require("mongoose");

const restaurantsShema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    food: [{
        pizza: {
            type: String,
            required: true
        },
        burger: {
            type: String,
            required: true
        }
    }]
});

const RestaurantModel = mongoose.model('restaurantShema', restaurantsShema);

module.exports = RestaurantModel;