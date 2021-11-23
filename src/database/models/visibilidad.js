'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visibilidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Visibilidad.hasMany(models.Producto,{
        foreignKey: "visibilidadId",
        as: "productos"
      })
    }
  };
  Visibilidad.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Visibilidad',
  });
  return Visibilidad;
};