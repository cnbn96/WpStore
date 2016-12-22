var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection;

var SpecificationModel = new mongoose.Schema({
    specificationDetail: {type : String ,require: true},
    softSupport: {type : String}
});
CategoryModel.plugin(mongoosePaginate);

var Specification = module.exports = mongoose.model("Specification", SpecificationModel);

module.exports.specificationList = function(callback) {
  Specification.find({}, function(err, categories) {
    callback(err, categories);
  });
}

module.exports.getSpecificationById = function(id, callback) {
  Specification.findById(function(err, category) {
    callback(err, category);
  });
}

module.exports.deleteBySpecificationId = function(id, callback) {
  Specification.remove({_id: id}, function(err) {
    callback(err);
  })
}


module.exports.updateSpecificationById = function(id, specificationDetail, softSupport, callback) {
  Specification.update({_id: id}, {specificationDetail: specificationDetail, softSupport: softSupport}, {}, function(err) {
    callback(err);
  })
}

module.exports.createSpecification = function(specificationDetail ,softSupport, callback) {
  var newSpecification= new Specification({
    specificationDetail: specificationDetail,
    softSupport: softSupport
  });
  newSpecification.save(function(err){
    callback(err, newSpecification);
  });
}
