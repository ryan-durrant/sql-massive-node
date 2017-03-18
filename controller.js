var app = require('./index');

module.exports = {
  Create: function(req, res, next){
    var db = app.get('db');

    db.create_product([req.query.name, req.query.desc, req.query.price, req.query.imageurl], function(err, products){
      console.log(err, products);
      res.json("Successfully added the product");
    });
  },
  GetOne: function(req, res, next){
    var db = app.get('db');

    db.read_product([req.params.productId], function(err, product){
      console.log(err, product);
      res.json(product);
    });
  },
  GetAll: function(req, res, next){
    var db = app.get('db');

    db.read_products(function(err, products){
      console.log(products);
      res.json(products);
    });


  },
  Update: function(req, res, next){
    var db = app.get('db');

    db.update_product([req.params.productId, req.query.desc], function(err, products){
      console.log(err, products);
      res.json("Successfully updated the product at ID: " + req.params.productId);
    });
  },
  Delete: function(req, res, next){
    var db = app.get('db');

    db.delete_product([req.params.productId], function(err, products){
      res.json("Successfully deleted product at ID: " + req.params.productId);
    });
  }

};
