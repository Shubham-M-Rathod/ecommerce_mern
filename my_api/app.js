const bodyParser = require('body-parser')
const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors')
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

//handling errors
app.use((err, req, res, next)=>
{
    if(res.headerSent)
    return next(err);
    res.status( err.code || 500).json({message:err.message || 'An Unknown Error Occurred'});
})
// 1
mongoose//store=name of db
 .connect("mongodb+srv://${pass}@store.18ylbtx.mongodb.net/?retryWrites=true&w=majority") //dummy password and store - database name
 .then(()=>{app.listen(5000)})
 .catch((err)=>{console.log(err)});

