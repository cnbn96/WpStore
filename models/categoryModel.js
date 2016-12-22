var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection;

var CategoryModel = new mongoose.Schema({
    categoryName: {type : String ,require: true}
});
CategoryModel.plugin(mongoosePaginate);

var Category = module.exports = mongoose.model("Category", CategoryModel);

module.exports.categoryList = function(callback) {
  Category.find({}, function(err, categories) {
    callback(err, categories);
  });
}

module.exports.getCategoryById = function(id, callback) {
  Category.findById(function(err, category) {
    callback(err, category);
  });
}

module.exports.deleteByCategoryId = function(id, callback) {
  Category.remove({_id: id}, function(err) {
    callback(err);
  })
}


module.exports.updateCategoryById = function(id, categoryName, callback) {
  Category.update({_id: id}, {categoryName: categoryName}, {}, function(err) {
    callback(err);
  })
}

module.exports.createCategory = function(categoryName, callback) {
  var newCategory= new Category({
    categoryName: categoryName
  });
  newCategory.save(function(err){
    callback(err, newCategory);
  });
}
