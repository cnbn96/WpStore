var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection;

var HomeAdsModel = new mongoose.Schema({
    adsTitle: {type : String ,require: true},
    adsDescription: {type : String ,require: true},
    adsLink: {type : String ,require: true},
    adsImage: {type : String ,require: true}
});
HomeAdsModel.plugin(mongoosePaginate);

var HomeAds = module.exports = mongoose.model("HomeAds", HomeAdsModel);

module.exports.homeAdsList = function(callback) {
  HomeAds.find({}, function(err, homeads) {
    callback(err, homeads);
  });
}

module.exports.getHomeAdsById = function(id, callback) {
  HomeAds.findById(function(err, hoemadv) {
    callback(err, hoemadv);
  });
}

module.exports.deleteByHomeAdsId = function(id, callback) {
  HomeAds.remove({_id: id}, functi\]on(err) {
    callback(err);
  })
}


module.exports.updateCategoryById = function(id, adsTitle, adsDescription, adsLink, adsImage, callback) {
  HomeAds.update({_id: id}, {adsTitle: adsTitle,
                             adsDescription: adsDescription,
                             adsLink: adsLink,
                             adsImage: adsImage}, {}, function(err) {
    callback(err);
  })
}

module.exports.createCategory = function(adsTitle, adsDescription, adsLink, adsImage, callback) {
  var newHomeAds= new HomeAds({
    adsTitle: adsTitle,
    adsDescription: adsDescription,
    adsLink: adsLink,
    adsImage: adsImage
  });
  newHomeAds.save(function(err){
    callback(err, newHomeAds);
  });
}
