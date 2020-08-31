'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SuperUser.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SuperUser',
  });
  // SuperUser.sync({alter:true});
  return SuperUser;
};