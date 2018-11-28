'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('states', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      state_name: {
        type: Sequelize.STRING
      },
      region_id: {
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
      queryInterface.addConstraint('states', ['region_id'], {
          type: 'FOREIGN KEY',
          name: 'fkey_region_id_1',
          references: { //Required field
            table: 'regions',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
  })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('states');
  }
};