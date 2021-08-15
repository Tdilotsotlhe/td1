module.exports = (sequelize, Sequelize) => {
    const cart_details = sequelize.define("cart_details", {
      cart_id: {
        type: Sequelize.INTEGER
      },
      item_id: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  
    return cart_details;
  };
  