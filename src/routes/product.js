// dùng để điều hướng đến các trang liên quan đến sản phẩm
const express = require('express')
const router = express.Router()

const ProductController = require('../app/controllers/ProductController')

// newsController.index
// 
router.get('/create', ProductController.create)
router.post('/store', ProductController.store)
router.get('/:Slug', ProductController.show)
router.post('/handle-form-action', ProductController.handleFormAction)
router.put('/:id', ProductController.update)
router.patch('/:id/restore', ProductController.restore)
router.delete('/:id', ProductController.delete)
router.delete('/:id/force', ProductController.Forcedelete)
router.get('/:id/edit', ProductController.edit)




module.exports = router