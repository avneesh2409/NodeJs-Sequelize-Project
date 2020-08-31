const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Chat extends Model {
      static associate(models) {
        // define association here
        console.log("associations here");
      }
    };
    Chat.init({
      username: {
       type:DataTypes.STRING,
       allowNull:false   
      },
      socketid: {
        type:DataTypes.STRING,
        allowNull:false   
       }
    }, {
      sequelize,
      modelName: 'Chat',
    });
    // Chat.sync({ alter: true })
    return Chat;
  };