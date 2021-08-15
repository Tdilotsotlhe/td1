module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  

  
    // Register new user
    router.post("/register", users.create);
    // router.get("/", users.create);
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);

    //user login  --TODO

    //user update --TODO
  
  
    app.use('/api/users', router);
  };
  