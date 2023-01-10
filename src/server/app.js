const exp = require('express') , mongoose = require('mongoose');
const shopRt = require('./routes/ShopRouter');
const app = exp() , port = 3030 , url = 'mongodb+srv://Tuugii:n3stc0r3@cluster0.rubnbhd.mongodb.net/?retryWrites=true&w=majority'; 
app.use(exp.json());
app.use(shopRt); 

mongoose.set('strictQuery', true);

mongoose.connect(url).then(() => {
   console.log('Connected successfully!'); 

   app.listen(port , () => {
      console.log(`Listening on http://localhost:${port}`); 
   })
}); 

//npm init
//npm start

// mongodb+srv://Tuugii:<password>@cluster0.rubnbhd.mongodb.net/?retryWrites=true&w=majority