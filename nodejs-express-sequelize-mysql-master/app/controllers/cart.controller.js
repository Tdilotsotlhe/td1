const { cart_details } = require("../models");
const db = require("../models");
const Product = db.product;
const Cart = db.cart;
const Cart_Details = db.cart_details;
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.title) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
    
    //check if non checked out cart exists

    // Create a cart
    const cart = {
      user: req.body.user, //req.body.user, //extract this from JWT
      checkedOut: "false"
    };
  
    // Save cart in the database
    Cart.create(cart)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the cart."
        });
      });
  };
  
  // Retrieve all items in cart from the database.
  exports.findAll = (req, res) => {
    const cart_id = req.body.cart_id;
    let condition = cart_id ? { cart_id: { [Op.like]: `%${cart_id}%` } } : null;
  
    Cart_Details.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cart items."
        });
      });
  };


  // add Item to cart
  exports.addToCartDetails = (req, res) => {
    const cart_id1 = req.body.cart_id;
    const item_id1 = req.body.item_id;
    console.log(cart_id1);
    console.log(item_id1);
    // console.log(req);
    let condition = cart_id1 ? { cart_id1: { [Op.like]: `%${cart_id1}%` } } : null;
     //on duplicate key update quantity  --TODO

    // Create a cartDetail record
      const cartDetail1 = {
        cart_id:  req.body.cart_id, //req.body.user, //extract this from JWT
        item_id: req.body.item_id,
        quantity: 1
      };
    Cart_Details.create({cartDetail1})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cart items."
        });
      });
  };
  
  // Find a single Tutorial with an id
//   exports.findOne = (req, res) => {
//     const id = req.params.id;
  
//     Tutorial.findByPk(id)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving Tutorial with id=" + id
//         });
//       });
//   };
  
  // Update a Tutorial by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Tutorial.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };
  
  // Delete an Item from cart
//   exports.delete = (req, res) => {
//     const id = req.params.id;
  
//     Tutorial.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Tutorial was deleted successfully!"
//           });
//         } else {
//           res.send({
//             message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Tutorial with id=" + id
//         });
//       });
//   };
  

  