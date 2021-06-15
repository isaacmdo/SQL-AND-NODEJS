const { Model } = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');

class Address extends Model {
 static init(connection){
   super.init({
     zipcode: DataTypes.STRING,
     street: DataTypes.STRING,
     number: DataTypes.INTEGER,
    }, {
    sequelize: connection
   })
 }
 static associate(models){
   this.belongsTo(models.User, {
     foreignKey: 'user_id',
     as: 'user'
   })
 }
}

module.exports = Address;