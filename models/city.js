'use strict';
module.exports = (sequelize, DataTypes) => {
  var city = sequelize.define('city', {
    city_name: DataTypes.STRING,
    state_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return city;
};