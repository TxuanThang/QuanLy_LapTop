const Laptop = require("../models/Laptop");
const { mutipleMongooseToObject } = require("../../util/mongooes");
class StoreController {
  //[GET] /store/Product/laptop

  Productlaptop(req, res, next) {

    Promise.all([Laptop.find({}),Laptop.countDocumentsDeleted()])
      .then(([Laptops, deleteCount]) => 
            res.render("store/Productlaptop", {
            deleteCount,
            Laptops: mutipleMongooseToObject(Laptops),
          })
      )
      .catch(next)
  }
  //[GET] /store/Trash/laptop
  Trashlaptop(req,res,next){
    Laptop.findDeleted({})
    .then((Laptops) => {
      res.render("store/Trashlaptop", {
        Laptops: mutipleMongooseToObject(Laptops),
      });
    })
    .catch((error) => next(error));
  }

}
module.exports = new StoreController();
