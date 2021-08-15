module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING
      },
      passHash: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      subscription: {
        type: Sequelize.STRING
      },
      subscription: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };
  