const mongoose = require("mongoose");
require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.localdb, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
}, (err) => {
  if(!err) return console.log('MongoDB Connected...');
  return console.log("We got error, ", +err);
})