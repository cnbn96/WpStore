var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection;

var ReviewDetailModel = new mongoose.Schema({
    detailDescription: {type : String ,require: true},
    detailAuthorName: {type : String , default: null},
    detailAuthorEmail: {type : String , default: null},
    detailRatingPoint: {type : Number ,require: true},
    detailReviewDate: {type : Date ,require: true},
    detailReviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
});
ReviewDetailModel.plugin(mongoosePaginate);

var ReviewDetail = module.exports = mongoose.model("ReviewDetail", ReviewDetailModel);

module.exports.detailReviewList = function(callback) {
  ReviewDetail.find({}, function(err, details) {
    callback(err, details);
  });
}

module.exports.getDetailReviewById = function(id, callback) {
  ReviewDetail.findOne({_id: id},function(err, detail) {
    callback(err, detail);
  });
}

module.exports.getDetailReviewByReviewId = function(detailReviewId, callback) {
  ReviewDetail.find({"detailReviewId": detailReviewId},function(err, details) {
    callback(err, details);
  });
}

module.exports.deleteByDetailReviewId = function(id, callback) {
  ReviewDetail.remove({_id: id}, function(err) {
    callback(err);
  })
}


module.exports.updateDetailReviewById = function(id, detailDescription, detailAuthorName, detailAuthorEmail, detailRatingPoint, detailReviewDate, detailReviewId, callback) {
  ReviewDetail.update({_id: id}, {detailDescription: detailDescription,
                                  detailAuthorName: detailAuthorName,
                                  detailAuthorEmail: detailAuthorEmail,
                                  detailRatingPoint: detailRatingPoint,
                                  detailReviewDate: detailReviewDate,
                                  detailReviewId: detailReviewId}, {}, function(err) {
    callback(err);
  })
}

module.exports.createDetailReview = function(detailDescription, detailAuthorName, detailAuthorEmail, detailRatingPoint, detailReviewDate, detailReviewId, callback) {
  var newDetailReview= new DetailReview({
    detailDescription: detailDescription,
    detailAuthorName: detailAuthorName,
    detailAuthorEmail: detailAuthorEmail,
    detailRatingPoint: detailRatingPoint,
    detailReviewDate: new Date(detailReviewDate),
    detailReviewId: detailReviewId
  });
  newDetailReview.save(function(err){
    callback(err, newDetailReview);
  });
}
