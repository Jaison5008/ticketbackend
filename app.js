const express=require("express"); 
const one=require("./controller/one") 
const match=require("./controller/match.data") 
const stand=require("./controller/stand.data") 
const cart=require("./controller/cart") 
const bodyParser=require('body-parser')  
var cookieParser = require('cookie-parser')

const cors =require('cors')
const app=express();  
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/one",one) 
app.use("/match",match)
app.use("/stand",stand)
app.use("/cart",cart)

module.exports=app;