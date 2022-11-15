const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("sequelize", "postgres", "Akshay@123", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  port: "5000",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contact = require("./contact")(sequelize, DataTypes);
db.user = require("./user")(sequelize, DataTypes, Model);
sequelize.sync({ force: false });
module.exports = db;
