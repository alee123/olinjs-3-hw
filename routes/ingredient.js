
// routes for users

var Ingredient = require('../models/ingredient')



exports.new = function(req, res){
  res.render('ingredients', {title: "Amanda's app"});
};

exports.create = function(req,res){
  var ing = new Ingredient({ name:req.body.iName , cost:req.body.cName});
  ing.save(function (err) {
    if (err)
      return console.log("error we couldn't save bobby");
    // redirect to the list of users
//    res.redirect('/');
    res.send(req.body);
  });
};
