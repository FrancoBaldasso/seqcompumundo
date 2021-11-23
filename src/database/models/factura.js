'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Factura.hasMany(models.Detalle_factura,{
        foreignKey: "facturaId",
        as: "detalles"
      })
      Factura.belongsTo(models.Envios);
      Factura.belongsTo(models.Usuario);
    }
  };
  Factura.init({
    fecha: DataTypes.DATE,
    total: DataTypes.FLOAT,
    usuarioId: DataTypes.INTEGER,
    enviosId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Factura',
  });
  return Factura;
};