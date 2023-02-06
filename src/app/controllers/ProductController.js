const Laptop = require("../models/Laptop");
const { mongooseToObject } = require("../../util/mongooes");
class ProductController {
  show(req, res, next) {
    // [GET] Product/Slug
    Laptop.findOne({ Slug: req.params.Slug })
      .then((Laptop) => {
        res.render('Product/show', { Laptop: mongooseToObject(Laptop) })
      })
      .catch(next)
  }

  create(req, res, next) {
    // [GET] Product/create  ( GET Gửi yêu cầu lấy dữ liệu )  
    res.render('Product/create')
  }

  store(req, res, next) {
    // [POST] Product/store  ( POST Gửi yêu cầu thêm dữ liệu )  
    //  res.json(req.body)
    const laptop = new Laptop(req.body)
    laptop.save()
      .then(() => res.redirect('/'))
      .catch(error => { })
  }
  edit(req, res, next) {
    // [GET] Product/:id/edit 
    // Dùng ID để tìm sản phẩm ở trong CSDL
    Laptop.findById(req.params.id)
      .then((Laptop) => {
        res.render('Product/edit', { Laptop: mongooseToObject(Laptop) })
      })
      .catch(next)
  }

  update(req, res, next) {
    // [PUT] Product/:id
    Laptop.updateOne({ _id: req.params.id }, req.body) //ĐK update({Đk để Update, phương thức thực hiện})
      .then(() => res.redirect('/store/Product/laptop')) // redirect dùng để điều hướng sau khi thực hiện xong (ở đây ta điều hướng tới '/store/Product/laptop' )
      .catch(next)
  }
  delete(req, res, next) {
    //[DELETE] /Product/:id/force
    Laptop.delete({ _id: req.params.id }) // Công việc thực hiện
      .then(() => res.redirect('back')) //Nếu thành công thì nó sẽ ở đây trả về back tức là trả về lại chính nó
      .catch(next) // nếu thất bại nó sẽ bắt lỗi
  }
  Forcedelete(req, res, next) {
    //[DELETE] /Product/:id
    Laptop.deleteOne({ _id: req.params.id }) // Công việc thực hiện
      .then(() => res.redirect('back')) //Nếu thành công thì nó sẽ ở đây trả về back tức là trả về lại chính nó
      .catch(next) // nếu thất bại nó sẽ bắt lỗi
  }
  restore(req, res, next) {
    // [PATCH] Product/:id/restore
    Laptop.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next)
  }
  handleFormAction(req, res, next) {
   // [POST] /product/handle-form-action
    switch(req.body.action){
      case 'Delete':
        Laptop.delete({ _id: { $in: req.body.LaptopIDs } }) // Công việc thực hiện
            .then(() => res.redirect('back')) //Nếu thành công thì nó sẽ ở đây trả về back tức là trả về lại chính nó
            .catch(next)
        break;
      default:
        res.json({Message: "Không hợp lệ"})
    }
  }
}
module.exports = new ProductController();
