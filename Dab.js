const express = require('express')
const app = express();
const Port = 8000;

app.set('view engine', 'pug') 
app.get('/',(req,res)=>{
    res.status(200).render("../Home.pug")
})
app.get("/Services",(req,res)=>{
    res.status(200).render("../Services.pug")
})
app.get("/Delivery",(req,res)=>{
    res.status(200).render("../Delivery.pug")
})
 app.listen(Port,()=>{
  console.log(`Localhost is served at port ${Port}`)
 })