'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales', {
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
      gold_weight_sold: {
        type: Sequelize.FLOAT
      },
      gold_price: {
        type: Sequelize.FLOAT
      },
      gold_amount_sold: {
        type: Sequelize.FLOAT
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
      queryInterface.addConstraint('sales', ['user_id'], {
          type: 'FOREIGN KEY',
          name: 'fkey_user_id_2',
          references: { //Required field
            table: 'users',
            field: 'id'
          },
          onDelete: 'cascade'
        })
  })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sales');
  }
};