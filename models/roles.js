'use strict';
module.exports = (sequelize, DataTypes) => {
  var roles = sequelize.define('roles', {
    role: DataTypes.STRING(50)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return roles;
};