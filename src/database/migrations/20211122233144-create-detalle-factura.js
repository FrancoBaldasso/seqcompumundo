'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Detalle_facturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      subtotal: {
        type: Sequelize.FLOAT
      },
      productoId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Productos',
          key: 'id'
        }
      },
      facturaId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Facturas',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Detalle_facturas');
  }
};