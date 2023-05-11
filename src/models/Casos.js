const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Casos', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
    },
    Compañia:{type:DataTypes.STRING,},
    Marca:{type:DataTypes.STRING,},
    Nombre:{type:DataTypes.STRING,},
    Numero:{type:DataTypes.STRING,},
    Patente:{type:DataTypes.STRING,},
    Vencimiento:{type:DataTypes.STRING,},
    celular:{type:DataTypes.STRING,},
    direccion:{type:DataTypes.STRING,},
    estado:{type:DataTypes.STRING,},
    localidad:{type:DataTypes.STRING,},
    notas:{type:DataTypes.STRING,},
    perito:{type:DataTypes.STRING,},
    taller:{type:DataTypes.STRING,},

  },{
    freezeTableName: true,
    timestamps: false
});
};