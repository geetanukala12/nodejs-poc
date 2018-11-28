'use strict';
module.exports = (sequelize, DataTypes) => {
  var state = sequelize.define('state', {
    state_name: DataTypes.STRING,
    region_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return state;
};