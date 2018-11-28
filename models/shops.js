'use strict';
module.exports = (sequelize, DataTypes) => {
  var shops = sequelize.define('shops', {
    shop_name: DataTypes.STRING,
    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return shops;
};