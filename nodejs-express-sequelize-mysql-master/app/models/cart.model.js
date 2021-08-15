module.exports = (sequelize, Sequelize) => {
    const cart = sequelize.define("cart", {
      user: {
        type: Sequelize.INTEGER
      },
      checkedOut: {
        type: Sequelize.STRING
      }
    });
  
    return cart;
  };
  