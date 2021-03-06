var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var db = mongoose.connection;

var ProductModel = new mongoose.Schema({
    productName: {type : String ,require: true},
    productPrice: {type : Number ,require: true},
    productQuantity: {type : Number ,require: true},
    productGuarantee: {type : Number ,require: true},
    productUpdateDate: {type : Date ,require: true},
    productBrandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand'
    },
    productCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    productSpecificationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Specification'
    },
    productReviewId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
});
ProductModel.plugin(mongoosePaginate);

var Product = module.exports = mongoose.model("Product", ProductModel);

module.exports.productList = function(callback) {
  Product.find({}, function(err, rooms) {
    callback(err, rooms);
  });
}
module.exports.getProductById = function(id, callback) {
  Product.findById(function(err, product) {
    callback(err, product);
  });
}

module.exports.deleteByProductId = function(id, callback) {
  Product.remove({_id: id}, function(err) {
    callback(err);
  })
}


module.exports.updateProductById = function(id, productName, productPrice, productQuantity, productGuarantee, productUpdateDate, productBrandId, productCategoryId, productSpecificationId, productReviewId, callback) {
  Product.update({_id: id}, {productName: productName,
                             productPrice: productPrice,
                             productQuantity: productQuantity,
                             productGuarantee: productGuarantee,
                             productUpdateDate: productUpdateDate,
                             productBrandId: productBrandId,
                             productCategoryId:productCategoryId,
                             productSpecificationId: productSpecificationId,
                             productReviewId: productReviewId}, {}, function(err) {
    callback(err);
  })
}

module.exports.updateQuantityProductById = function(id, productQuantity, productUpdateDate, callback){
  Product.update({_id: id}, {productQuantity: productQuantity,
                            productUpdateDate: new Date(productUpdateDate)}, {}, function(err){
    callback(err);
  })
}

module.exports.createProduct = function(productName, productPrice, productGuarantee, productUpdateDate, productBrandId, productCategoryId,productSpecificationId, productReviewId, callback) {
  var newProduct= new Product({
    productName: productName,
    productPrice: productPrice,
    productGuarantee: productGuarantee,
    productUpdateDate: new Date(productUpdateDate),
    productBrandId: productBrandId,
    productCategoryId: productCategoryId,
    productSpecificationId: productSpecificationId,
    productReviewId: productReviewId
  });
  newProduct.save(function(err){
    callback(err, newProduct);
  });
}
