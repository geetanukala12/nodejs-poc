'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('city', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city_name: {
        type: Sequelize.STRING
      },
      state_id: {
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
      queryInterface.addConstraint('city', ['state_id'], {
          type: 'FOREIGN KEY',
          name: 'fkey_state_id_1',
          references: { //Required field
            table: 'state',
            field: 'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        })
  })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('city');
  }
};