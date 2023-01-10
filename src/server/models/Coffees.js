const mongoose = require('mongoose'); 
const { model , Schema } = mongoose; 

const CoffeSchema = new Schema({
    img: {type: String , required: true},
    title: {type: String , required: true}, 
    price: {type: String , required: true}, 
    type: {type: String, required: true},
    description: {type: String, required: false},
    id: {type: Number, required: false},
    ingredients: {type: Array, required: false}
}); 

const Shops = model('Shops' ,CoffeSchema); 

module.exports = Shops; 