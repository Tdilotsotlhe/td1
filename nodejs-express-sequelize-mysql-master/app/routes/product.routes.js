module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  

  
    // Retrieve all Products
    router.get("/", products.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", products.findOne);
  
  
    app.use('/api/products', router);
  };
  