const bodyParser = require('body-parser')
const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const corsOptions = 
{
    origin:['http://localhost:3000'],
}

const users=require('./routes/user');
const product = require('./routes/product');

const app=express();
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(users)
app.use('/product', product)
app.use('/assets',express.static(path.join(__dirname,'/assets')))

app.use((err, req, res, next)=>
{
    if(req.file)
    {fs.unlinkSync(req.file.path), err=>console.log(err)}
    return next(err);
    res.status( err.code || 500).json({message:err.message || 'An Unknown Error Occurred'});
})
// 1
mongoose//store=name of db
 .connect("mongodb+srv://Shubham:12345%40Abcde@store.18ylbtx.mongodb.net/?retryWrites=true&w=majority") //dummy password and store - database name
 .then(()=>{app.listen(5000)})
 .catch((err)=>{console.log(err)});

