const exp = require('express');

const shopRt = exp.Router();
const Shops = require('../models/Coffees');

shopRt.get('/data', async (req, res) => {
  const shop_data = await Shops.find();

  res.send({
    data: shop_data,
  });
});

shopRt.get('/data/:id' , async (req , res) => {
    const specData = await Shops.findOne({id: req.params['id']}); 
    res.send({
       spec: specData,
    })
})

module.exports = shopRt;
