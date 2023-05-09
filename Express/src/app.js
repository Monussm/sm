const express=require("express");
const app=express();
const port=process.env.port || 3000
const path=require("path");
const hbs=require("hbs")
const mypublic=path.join(__dirname,"../public");
const mypartials=path.join(__dirname,"../partials");
app.use(express.urlencoded({extended:false}));
app.use(express.static(mypublic));
app.set("view engine","hbs")
hbs.registerPartials(mypartials);
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
}
app.get("/",(req,res)=>{

res.render("index")



})
app.listen(port,(req,res)=>{

console.log("Running on Port 3000")



})