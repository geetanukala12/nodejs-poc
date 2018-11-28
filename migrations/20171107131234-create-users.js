'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      shop_id: {
        allowNull: false,
        type: Sequelize.INTEGER
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
      queryInterface.addConstraint('users', ['role_id'], {
          type: 'FOREIGN KEY',
          name: 'fkey_role_id_1',
          references: { //Required field
            table: 'roles',
            field: 'id'
          },
          onDelete: 'cascade'
        }),
      queryInterface.addConstraint('users', ['shop_id'], {
        type: 'FOREIGN KEY',
        name: 'fkey_shop_id_1',
        references: { //Required field
          table: 'shops',
          field: 'id'
        },
        onDelete: 'cascade'
      })
  })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};