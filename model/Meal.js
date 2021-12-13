const { MealRating } = require("./MealRating");

class Meal {
  constructor(mealId, name, description, imageUrl, countryOfOrigin, typicalMealTime, dateAdded) {
    this.mealId = mealId;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.countryOfOrigin = countryOfOrigin;
    this.typicalMealTime = typicalMealTime;
    this.dateAdded = dateAdded;
    this.ratings = new MealRating();
  }

  avgRating = () => {};

  numberOfVotes = () => {
    return this.ratings.length;
  };
}

module.exports = { Meal };
