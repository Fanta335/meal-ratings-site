// numbers of images to display
const baseImageUrl = "https://recursionist.io/img/dashboard/lessons/quickstart/";
const IMAGE_LIMIT = 3;
const DATEADDED_LIMIT = 90;

const createCategory = (meals, type) => {
  let images = [];

  if (type === "morning") {
    images = findImagesByMealTime(meals, 1);
  } else if (type === "afternoon") {
    images = findImagesByMealTime(meals, 2);
  } else if (type === "evening") {
    images = findImagesByMealTime(meals, 3);
  } else if (type === "date") {
    images = findImagesByDate(meals);
  } else if (type === "rate") {
    // images = findImagesByTopRate(meals);
  } else {
    console.log("invalid category type.");
  }

  console.log(images);
};

const findImagesByMealTime = (meals, mealTime) => {
  let images = [];
  let i = 0;

  while (i < meals.length && images.length < IMAGE_LIMIT) {
    const meal = meals[i];
    if (meal.typicalMealTime === mealTime) {
      // set image url
      const url = meal.pk < 19 ? baseImageUrl + meal.imageUrl : meal.imageUrl;
      const name = meal.name;
      images.push({ url: url, name: name });
    }
    i++;
  }


  return images;
};

const findImagesByDate = (meals) => {
  let images = [];
  let i = 0;

  while (i < meals.length && images.length < IMAGE_LIMIT) {
    const meal = meals[i];
    const dateAdded = new Date(meal.dateAdded);
    const currentDate = new Date();
    if (calculateDateDiff(dateAdded, currentDate) <= DATEADDED_LIMIT) {
      const url = meal.pk < 19 ? baseImageUrl + meal.imageUrl : meal.imageUrl;
      const name = meal.name;
      images.push({ url: url, name: name });
    }
    i++;
  }

  return images;
};

// const findImagesByTopRate = (meals) => {
//   let images = [];
//   let i = 0;

//   while (i < meals.length && images.length < IMAGE_LIMIT) {
//     const meal = meals[i];
//     const rate = meal
//   }

//   return images;
// };

const calculateDateDiff = (date1, date2) => {
  return Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
};

module.exports = {
  createCategory,
};
