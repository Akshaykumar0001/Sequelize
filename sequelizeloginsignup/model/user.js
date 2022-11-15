module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}
  User.init(
    {
      
      email: {
        type: DataTypes.STRING,
        allownull: false,
      },
      Username: {
        type: DataTypes.STRING,
        allownull: false,
      },
      password: {
        type: DataTypes.STRING,
        allownull: false,
      },
    },
    {
      sequelize, 
      modelName: "User", 
      tableName: "Singin",
      timestamps: false,
    }
  );
  return User;
};
