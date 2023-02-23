const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        Mail:{type:String},
        Password:{type:String},
    }
)

module.exports=mongoose.model('UserSchema', UserSchema)