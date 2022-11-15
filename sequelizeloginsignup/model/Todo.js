module.exports = (sequelize, DataTypes, Model) => {
  class Todo extends Model {}
  Todo.init(
    {
      userName: {
        type: DataTypes.STRING,
        allownull: false,
      },
      todo: {
        type: DataTypes.STRING,
        allownull: false,
      },
      UpdatedTodo: {
        type: DataTypes.STRING,
        allownull: false,
      },
      completed: {
        type: DataTypes.STRING,
        allownull: false,
      },
    },
    {
      sequelize,
      modelName: "Todo",
      tableName: "todos",
      timestamps: false,
    }
  );
  return Todo;
};
