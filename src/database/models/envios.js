'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Envios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Envios.hasOne(models.Factura,{
        foreignKey: "enviosId",
        as: "facturas"
      })
    }
  };
  Envios.init({
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    departamento: DataTypes.STRING,
    codigo_postal: DataTypes.STRING,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Envios',
  });
  return Envios;
};