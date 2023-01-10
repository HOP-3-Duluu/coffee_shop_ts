const exp = require('express');

const shopRt = exp.Router();
const Shops = require('../models/Coffees');

shopRt.get('/data', async (req, res) => {
  const shop_data = await Shops.find();

  res.send({
    data: shop_data,
  });
});

module.exports = shopRt;
