module.exports = (sequelize, DataTypes) => {

  const Contact = sequelize.define(
    "contacts",
    {
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      currentaddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "industry",
      timestamps: false,
    }
  );
  return Contact;
};
