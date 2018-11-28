'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('access_logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      login_time: {
        type: Sequelize.DATE
      },
      logout_time: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function() {
      queryInterface.addConstraint('access_logs', ['user_id'], {
          type: 'FOREIGN KEY',
          name: 'fkey_user_id_3',
          references: { //Required field
            table: 'users',
            field: 'id'
          },
          onDelete: 'cascade'
        })
  })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('access_logs');
  }
};