const mongoose = require("mongoose")
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongoosedelete = require('mongoose-delete');




const Laptop = new Schema({
  Name: { type: String, default: "" },
  Price:{type: String},
  Description: { type: String },
  Image: { type: String },
  Slug: { type: String, slug: 'Name', unique: true },
});
// add plugin
mongoose.plugin(slug); // dùng để slug ra name của sp
mongoose.plugin(mongoosedelete, {
  deletedAt: "true" ,
  overrideMethods: "all"
})// dùng để xóa mềm sản phẩm

module.exports = mongoose.model("Laptop", Laptop, "Laptops")
