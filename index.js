var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var connectionString = "postgres://ryandurrant@localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString});

var app = express();
module.exports = app;
var controller = require('./controller.js');

app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);
var db = app.get('db');

// db.create_product(function(err, products){
//   console.log(err, "product added");
// });
// controller.GetOne();

app.get('/api/products', controller.GetAll);
app.get('/api/products/:productId', controller.GetOne);
app.put('/api/products/:productId', controller.Update);
app.post('/api/product', controller.Create);
app.delete('/api/product/:productId', controller.Delete);



app.listen('3000', function(){
  console.log("Successfully listening on : 3000");
});
