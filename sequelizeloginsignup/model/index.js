  const{Sequelize,DataTypes, Model} = require('sequelize')

  const sequelize = new Sequelize("sequelize", "postgres", "Akshay@123", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    port: "5000",
  });
  sequelize.authenticate().then(()=>{
      console.log("connected to the database")
  }).catch((error)=>{
      console.log("not connected to the database:",error)
  })
  const db= {}
  db.sequelize = Sequelize;
  db.sequelize = sequelize;
db.signin = require("./user")(sequelize, DataTypes,Model);
db.Todo = require("./Todo")(sequelize, DataTypes, Model);
sequelize.sync({force:false})
module.exports =db;