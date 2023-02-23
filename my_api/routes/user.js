const express=require('express')
const router = express.Router()

const user_controller = require('../controllers/user_controller')

router.post('/new_user', user_controller.new_user);
module.exports=router;