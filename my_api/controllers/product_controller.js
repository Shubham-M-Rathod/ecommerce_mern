const ProductSchema = require('../model/product_model')

const getProductById = async(req, res, next)=>
{
    let product;
    try {
    product = await ProductSchema.find({name:req.params.pid});
    } catch (error) {
    next(error); 
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
    const product=new ProductSchema(req.body);//changes in futures
    console.log(req.body);
    await product.save();
    res.json(product)
}

//multiple functions export
exports.getProductById = getProductById;
exports.getProducts = getProducts;
exports.new_product=new_product;
