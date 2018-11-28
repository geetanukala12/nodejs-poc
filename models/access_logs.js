'use strict';
module.exports = (sequelize, DataTypes) => {
  var access_logs = sequelize.define('access_logs', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    login_time: DataTypes.DATE,
    logout_time: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return access_logs;
};