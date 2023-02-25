const express=require('express')
const router = express.Router()

const product_controller = require('../controllers/product_controller')
const imageUpload = require('../multiware/imageUpload')

router.get('/all',product_controller.getProducts)
router.get('/:pid',product_controller.getProductById)
router.post('/new',imageUpload.single('image') ,product_controller.new_product)
router.delete('/delete/:pid',product_controller.deleteProduct)

module.exports=router;
