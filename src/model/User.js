const { Model } = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');

class User extends Model {
 static init(connection){
   super.init({
     name: DataTypes.STRING,
     email: DataTypes.STRING,
   }, {
    sequelize: connection
   })

 }
}

module.exports = User;