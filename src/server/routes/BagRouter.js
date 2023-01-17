const express = require('express'); 
const bags = require('../models/Bag');

const bagRt = express.Router();

bagRt.get('/shop/bag' , async(req , res) => {
    const bagDatas = await bags.findById({_id: '63bfd775c846dccd9e43fdd0'});  
    res.send({
        bagDatas: bagDatas,
    })
}); 

bagRt.put('/shop/bag/coffees' , async(req , res) => {
    await bags.findByIdAndUpdate({_id: '63bfd775c846dccd9e43fdd0'} , {$push: {coffees: req.body} , $inc: {totalItems: 1 , total: Number(req.body.price).toFixed(1)}}).then((res) => {
        console.log(res)
    }).catch(err => console.log(err)); 
})

// bagRt.put("/shop/bag/delete/:id", async(req, res) => {
//     await bags.findByIdAndUpdate({_id: '63bfd775c846dccd9e43fdd0'}, {$pull: {coffees: {uuid: req.params['id']}}}); 
// })


module.exports = bagRt; 