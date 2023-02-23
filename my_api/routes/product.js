const express=require('express')
const router = express.Router()

const product_controller = require('../controllers/product_controller')

router.get('/all',product_controller.getProducts)
router.get('/:pid',product_controller.getProductById)
router.post('/new',product_controller.new_product)

module.exports=router;
