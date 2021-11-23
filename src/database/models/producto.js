'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.hasOne(models.Detalle_factura,{
        foreignKey: "productoId",
        as: "detalles"
      })
      Producto.hasMany(models.Imagenes,{
        foreignKey: "productoId",
        as: "imagenes"
      })
      Producto.belongsTo(models.Color);
      Producto.belongsTo(models.Marca);
      Producto.belongsTo(models.Visibilidad);
      Producto.belongsTo(models.Marca);
      Producto.belongsTo(models.Categoria);
      Producto.belongsTo(models.Subcategoria);
    }
  };
  Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    marcaId: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    visibilidadId: DataTypes.INTEGER,
    subcategoriaId: DataTypes.INTEGER,
    subcategoria_categoria_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};