const UserSchema = require('../model/user_model');

// const getUserList=(req, res)=>res.json(demo);

const new_user = async(req, res, next) =>
{
    const {Mail, Password} = req.body;
    const user=new UserSchema({Mail, Password});//changes in futures
    console.log(req.body);
    await user.save();
    res.json(user)
}

// const getUserById = (req, res, next)=>
// {
//     const user = demo.find(p=>
//         {
//             // console.log(p.id);
//            return p.id==req.params.pid;
//         })
//         if(!user)
//         {
//             const err=new Error('Page Not Found');
//             next(err);
//         }
        
//         res.json(
//         {user}
//     )
// };

// const updateUser = (req, res, next)=>
// {
//     const {Name, Type} = req.body;
//     const user = demo.find(p=>p.id===req.params.uid)
//     // console.log(user);
//     user.Name=Name; user.Type=Type;
//     res.json(demo)
// }

exports.new_user = new_user;
// exports.getUserById = getUserById;
// exports.updateUser=updateUser;
// exports.getUserList=getUserList;