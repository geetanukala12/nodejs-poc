'use strict';
module.exports = (sequelize, DataTypes) => {
  var regions = sequelize.define('regions', {
    region_name: DataTypes.STRING(50)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return regions;
};