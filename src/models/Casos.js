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

    Compañia:{type:DataTypes.TEXT,},

    Marca:{type:DataTypes.TEXT,},
    Nombre:{type:DataTypes.TEXT,},
    Numero:{type:DataTypes.TEXT,},
    Patente:{type:DataTypes.TEXT,},
    Vencimiento:{type:DataTypes.TEXT,},
    celular:{type:DataTypes.TEXT,},
    direccion:{type:DataTypes.TEXT,},
    estado:{type:DataTypes.TEXT,},
    localidad:{type:DataTypes.TEXT,},
    notas:{type:DataTypes.TEXT,},
    perito:{type:DataTypes.TEXT,},
    taller:{type:DataTypes.TEXT,},

  },{
    freezeTableName: true,
    timestamps: false
});
};
