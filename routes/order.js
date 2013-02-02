
// routes for users

var Order = require('../models/order')
var Ingredient = require('../models/ingredient')

exports.new = function(req, res){
  var ingredients = Ingredient.find({}).exec(function (err, docs) {
   if (err)
    return console.log("error", ingredients);
    // send it back
    res.render('order', {ingredients: docs, title: "Amanda's cat app"});
  });
};

exports.create = function(req,res){

  var burger = new Order({customerName:req.body.customerName, ingredients: req.body.ing});

  burger.save(function (err) {
    if (err)
      return console.log(err);
    // redirect to the list of users
  });

};

exports.list = function(req,res){
  var orders = Order.find({}).populate('ingredients').exec(function (err, docs) {
    if (err)
      return console.log("error", orders);
    // send it back
    res.render('orderList', {orders: docs, title: "Amanda's app"});
  });

};

exports.delete = function(req,res){
  var order = req.body;
  var burger = Order.find({_id:order.name}).exec(function (err,docs) {
    if (err)
      return console.log("UH OH");
    docs[0].remove();
//    res.redirect('/cats');
    console.log(burger)
  })
};