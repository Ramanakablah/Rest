const express = require('express')
const app = express();
const Port = 8000;

app.set('view engine', 'pug') 
app.get('/',(req,res)=>{
    res.status(200).render('../Home.pug')
})
 app.listen(Port,()=>{
  console.log(`Localk host is served at port ${Port}`)
 })