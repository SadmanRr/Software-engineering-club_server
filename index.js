 
// const mongoose = require("mongoose");
const mongoose = require('mongoose');
var colors = require('colors');
const app = require('./app');
require('dotenv').config()
console.log("hit the back");
const port = 5000;
mongoose
.connect("mongodb+srv://inventoryProductData:9UE5h0IPO9pQ4z2W@laztdeveloper.zprclij.mongodb.net/newalier?retryWrites=true&w=majority")
.then(res => console.log("DATABASE CONNECTED".cyan))
.catch(err => console.log(err)) 
app.listen(port,()=>{
console.log("on port 5000 ",port)
}) 
 