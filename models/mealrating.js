"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MealRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MealRating.belongsTo("Meal", { foreignKey: "meal", targetKey: "id" });
    }
  }
  MealRating.init(
    {
      rating: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "MealRating",
    }
  );
  return MealRating;
};
