const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Peritos', {
    id:{
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
    },
    celular:{
        type: DataTypes.TEXT
    },
    nombre:{
        type:DataTypes.STRING,
    }, 
    rol:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    }
  },{
    freezeTableName: true,
    timestamps: false
});
};