"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Meals", [
      {
        id: 1,
        name: "Toast with Egg",
        description: "Toast with sunnyside up egg",
        imageUrl: "1.jpeg",
        countryOfOrigin: "England",
        typicalMealTime: 1,
        createdAt: "2011-05-05T02:12:01+00:00",
      },
      {
        id: 2,
        name: "Belgian Waffle",
        description: "Belgian waffle with blueberries and strawberries",
        imageUrl: "2.jpeg",
        countryOfOrigin: "Belgium",
        typicalMealTime: 1,
        createdAt: "2013-11-22T20:27:23+00:00",
      },
      {
        id: 3,
        name: "Pancakes",
        description: "Pancakes with blueberries and tangerines",
        imageUrl: "3.jpeg",
        countryOfOrigin: "Greece",
        typicalMealTime: 1,
        createdAt: "2011-09-10T19:00:48+00:00",
      },
      {
        id: 4,
        name: "Minimal Toast",
        description: "Toast and Coffee",
        imageUrl: "4.jpeg",
        countryOfOrigin: "USA",
        typicalMealTime: 1,
        createdAt: "2017-01-06T00:30:18+00:00",
      },
      {
        id: 5,
        name: "Cereal",
        description: "Cereal with Milk",
        imageUrl: "5.jpeg",
        countryOfOrigin: "USA",
        typicalMealTime: 1,
        createdAt: "2016-05-04T10:16:02+00:00",
      },
      {
        id: 6,
        name: "Croissant",
        description: "Croissant with orange juice and coffee",
        imageUrl: "6.jpeg",
        countryOfOrigin: "France",
        typicalMealTime: 1,
        createdAt: "2011-02-24T12:54:39+00:00",
      },
      {
        id: 7,
        name: "Chicken Vegetable Bowl",
        description: "Roasted chicken, beans, eggs, corn, tomatoes",
        imageUrl: "7.jpeg",
        countryOfOrigin: "Morocco",
        typicalMealTime: 2,
        createdAt: "2011-10-11T15:13:25+00:00",
      },
      {
        id: 8,
        name: "Qutab",
        description: "thinly rolled dough that is cooked briefly on a saj",
        imageUrl: "8.jpeg",
        countryOfOrigin: "Azerbaijan",
        typicalMealTime: 2,
        createdAt: "2010-03-10T12:28:09+00:00",
      },
      {
        id: 9,
        name: "Tuna Burger",
        description: "Burger with bread and patties made from tuna",
        imageUrl: "9.jpeg",
        countryOfOrigin: "USA",
        typicalMealTime: 2,
        createdAt: "2015-07-13T07:12:58+00:00",
      },
      {
        id: 10,
        name: "Baguette Sandwich",
        description: "Baguette with turkey, tomato, swiss cheese",
        imageUrl: "10.jpeg",
        countryOfOrigin: "France",
        typicalMealTime: 2,
        createdAt: "2011-09-10T19:00:48+00:00",
      },
      {
        id: 11,
        name: "Roasted Fish and Couscous",
        description: "Roasted fish and couscous with broccoli and lemon",
        imageUrl: "11.jpeg",
        countryOfOrigin: "Algeria",
        typicalMealTime: 2,
        createdAt: "2014-07-25T13:36:42+00:00",
      },
      {
        id: 12,
        name: "Quinoa vegetarian bowl",
        description: "Qunoia, carrots, corn, radish, and kale",
        imageUrl: "12.jpeg",
        countryOfOrigin: "Chile",
        typicalMealTime: 2,
        createdAt: "2010-03-10T12:28:09+00:00",
      },
      {
        id: 13,
        name: "Tacos",
        description: "Ground beef and avocado tacos",
        imageUrl: "13.jpeg",
        countryOfOrigin: "Mexico",
        typicalMealTime: 3,
        createdAt: "2018-09-08T15:02:53+00:00",
      },
      {
        id: 14,
        name: "Bun Rieu",
        description: "Traditional Crab Pork tomato soup",
        imageUrl: "14.jpeg",
        countryOfOrigin: "Vietnam",
        typicalMealTime: 3,
        createdAt: "2017-03-10T22:02:32+00:00",
      },
      {
        id: 15,
        name: "Hamburger",
        description: "Sandwich made with ground beef patty",
        imageUrl: "15.jpeg",
        countryOfOrigin: "Germany",
        typicalMealTime: 3,
        createdAt: "2014-07-25T13:36:42+00:00",
      },
      {
        id: 16,
        name: "Chamorro",
        description: "Beef Hind Shanks",
        imageUrl: "16.jpeg",
        countryOfOrigin: "Mexico",
        typicalMealTime: 3,
        createdAt: "2011-10-11T15:13:25+00:00",
      },
      {
        id: 17,
        name: "Shrimp Scampi",
        description: "Shrimp roasted in butter lemon sauce",
        imageUrl: "17.jpeg",
        countryOfOrigin: "Italy",
        typicalMealTime: 3,
        createdAt: "2016-11-08T12:22:45+00:00",
      },
      {
        id: 18,
        name: "Sashimi",
        description: "thin slices of high quality fish or other meats often served with soy sauce",
        imageUrl: "18.jpeg",
        countryOfOrigin: "Japan",
        typicalMealTime: 3,
        createdAt: "2020-04-23T00:00:19+00:00",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
