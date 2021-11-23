'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detalle_factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detalle_factura.belongsTo(models.Factura);
      Detalle_factura.belongsTo(models.Producto);
    }
  };
  Detalle_factura.init({
    cantidad: DataTypes.INTEGER,
    subtotal: DataTypes.FLOAT,
    productoId: DataTypes.INTEGER,
    facturaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detalle_factura',
  });
  return Detalle_factura;
};