const Laptop = require("../models/Laptop");
const { mutipleMongooseToObject } = require("../../util/mongooes");
class SiteController {
  index(req, res, next) {
    // gọi theo callback
    //  Laptop.find({}, function(err,Laptops) {
    //    if(!err){
    //     res.json(Laptops);
    //    }
    //    else{
    //      res.status(400).json({error:'Loi'})
    //   }
    //  })
    // gọi theo promise
    Laptop.find({})
      .then((Laptops) => {
        res.render("home", {
          Laptops: mutipleMongooseToObject(Laptops),
        });
      })
      .catch((error) => next(error));
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
