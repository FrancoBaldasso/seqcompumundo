'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Domicilio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Domicilio.belongsTo(models.Usuario);
    }
  };
  Domicilio.init({
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    departamento: DataTypes.STRING,
    codigo_postal: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Domicilio',
  });
  return Domicilio;
};