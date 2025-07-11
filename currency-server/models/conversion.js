'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Conversion.init({
    from_currency: DataTypes.STRING,
    to_currency: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    converted_amount: DataTypes.FLOAT,
    rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Conversion',
  });
  return Conversion;
};