'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shop_name: {
        type: Sequelize.STRING
      },
      city_id: {
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
      queryInterface.addConstraint('shops', ['city_id'], {
          type: 'FOREIGN KEY',
          name: 'fkey_city_id_5',
          references: { //Required field
            table: 'city',
            field: 'id'
          },
          onDelete: 'cascade'
        })
  })  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('shops');
  }
};