'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DECIMAL
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stock_min: {
        type: Sequelize.INTEGER
      },
      stock_max: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      marcaId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Marcas',
          key: 'id'
        }
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Categoria',
          key: 'id'
        }
      },
      colorId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Colors',
          key: 'id'
        }
      },
      visibilidadId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Visibilidads',
          key: 'id'
        }
      },
      subcategoriaId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Productos',
          key:'id'
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
    await queryInterface.dropTable('Productos');
  }
};