const mongoose = require('mongoose'); 
const { model , Schema } = mongoose; 

const bagSchema = new Schema({
    totalItems: {type: Number , required: true}, 
    total: {type: Number , required: true}, 
    coffees: [], 
    status: {type: String, required: true}
}); 

const bags = model('bags' , bagSchema); 

module.exports = bags;