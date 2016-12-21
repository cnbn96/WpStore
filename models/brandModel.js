var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection;

var BrandModel = new mongoose.Schema({
    brandName: String,
    brandPage: String
});
BrandModel.plugin(mongoosePaginate);

var Brand = module.exports = mongoose.model("Brand", BrandModel);

module.exports.brandList = function(callback) {
  Brand.find({}, function(err, rooms) {
    callback(err, rooms);
  });
}
module.exports.getBrandById = function(id, callback) {
  Brand.findById(function(err, brand) {
    callback(err, brand);
  });
}

module.exports.deleteByBrandId = function(id, callback) {
  Brand.remove({_id: id}, function(err) {
    callback(err);
  })
}


module.exports.updateBrandById = function(id, brandName, brandPage, callback) {
  Brand.update({_id: id}, {brandName: brandName, brandPage: brandPage}, {}, function(err) {
    callback(err);
  })
}

module.exports.createBrand = function(brandName, brandPage, callback) {
  var newBrand= new Brand({
    brandName: brandName,
    brandPage: brandPage,
  });
  newBrand.save(function(err){
    callback(err, newBrand);
  });
}
