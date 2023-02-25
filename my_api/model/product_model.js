const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// {
//     title:"Fresh Collections",
//     image:"https://chemtsf.com/wp-content/uploads/2022/06/iitrke-1.jpg",
//    name:"Royal",
//     categ:"Rock at Wedding !",
//     price:"999",
//     sizes:["S", "M", "L", "XL", "XXL", "XXXL"],
// }

const ProductSchema = new Schema(
    {
        title:{type:String},
        name:{type: String},
        image:{type: String},
        categ:{type: String},
        price:{type: Number},
        sizes:{type: Array},
    }
)

module.exports=mongoose.model('ProductSchema', ProductSchema)