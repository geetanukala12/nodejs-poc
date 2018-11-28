'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.INTEGER,
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, 
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};