var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection;

var reviewModel = new mongoose.Schema({
    ratingPointAverage: Number,
    reviewTotal: Number,
    reviewUpdateDate: Date
});
reviewModel.plugin(mongoosePaginate);

var Review = module.exports = mongoose.model("Review", reviewModel);
//
// module.exports.reviewList = function(callback) {
//   Review.find({}, function(err, categories) {
//     callback(err, categories);
//   });
// }
//
// module.exports.getReviewById = function(id, callback) {
//   Review.findById(function(err, category) {
//     callback(err, category);
//   });
// }
//
// module.exports.deleteBySpecificationId = function(id, callback) {
//   Specification.remove({_id: id}, function(err) {
//     callback(err);
//   })
// }
//
//
// module.exports.updateSpecificationById = function(id, specificationDetail, softSupport, callback) {
//   Specification.update({_id: id}, {specificationDetail: specificationDetail, softSupport: softSupport}, {}, function(err) {
//     callback(err);
//   })
// }
//
// module.exports.createSpecification = function(specificationDetail ,softSupport, callback) {
//   var newSpecification= new Specification({
//     specificationDetail: specificationDetail,
//     softSupport: softSupport
//   });
//   newSpecification.save(function(err){
//     callback(err, newSpecification);
//   });
// }
