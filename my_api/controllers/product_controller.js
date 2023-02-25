const ProductSchema = require('../model/product_model')
const fs = require('fs')

const getProductById = async(req, res, next)=>
{
    let product;
    try {
    product = await ProductSchema.find({name:req.params.pid});
    } catch (error) {
    console.log(error); 
    }

    res.json(
    {product}
    )
};

const getProducts = async(req, res, next)=>
{
    let product;
    try {
    product = await ProductSchema.find();
    } catch (error) {
    next(error); 
    }

    res.json(
    {product}
    )
};

const new_product = async(req, res, next) =>
{
    const product=new ProductSchema(
        {
            title : req.body.title,
            image: "http://localhost:5000/"+req.file.path,
            name : req.body.name,
            categ : req.body.categ,
            price : req.body.price,
        }
    );//changes in futures
    console.log("Here :\n")
    console.log(req.body);
    await product.save();
    res.json(product)
}

const deleteProduct = async(req, res, next) =>
{
    ProductSchema.find({name:req.params.pid})
    .then(product=>fs.unlink(product[0].image.substring(22),
    err=>console.log(err)))
    ProductSchema.remove({name:req.params.pid},(err)=>
    {console.log(err);})
}
//multiple functions export
exports.getProductById = getProductById;
exports.getProducts = getProducts;
exports.new_product=new_product;
exports.deleteProduct=deleteProduct;
