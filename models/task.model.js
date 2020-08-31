// const { DataTypes } = require('sequelize');

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
        console.log("associations here :-",models);
      }
    };
    Task.init({
      taskName: DataTypes.STRING,
      taskType: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Task',
    });
    // Task.sync({ alter: true })
    return Task;
  };