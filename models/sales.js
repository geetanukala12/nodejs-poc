'use strict';
module.exports = (sequelize, DataTypes) => {
  var sales = sequelize.define('sales', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gold_weight_sold: DataTypes.FLOAT,
    gold_price: DataTypes.FLOAT,
    gold_amount_sold: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sales;
};