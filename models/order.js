var mongoose = require('mongoose');
var ingredient = require('./ingredient');

//mongoose.connect(process.env.MONGOLAB_URI || 'localhost');
//mongoose.connect('mongodb://localhost/burgers')

var orderSchema = mongoose.Schema({
  customerName: String,
  ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
});

var Order = mongoose.model('Order', orderSchema);


module.exports = Order;
