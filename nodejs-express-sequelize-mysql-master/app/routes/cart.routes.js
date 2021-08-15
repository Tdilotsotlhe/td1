module.exports = app => {
    const cart = require("../controllers/cart.controller.js");
  
    var router = require("express").Router();
  
    router.post("/create", cart.create);
  
    // Retrieve all Products
    //once routes are protected should default to show nothing, no guest checkout allowed
    router.get("/", cart.findAll);

    //add_item to cart
    router.post("/add", cart.addToCartDetails);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", products.findOne);
  
  
    app.use('/api/cart', router);
  };