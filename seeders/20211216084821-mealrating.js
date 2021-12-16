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
    await queryInterface.bulkInsert("MealRatings", [
      {
        id: 1,
        meal: 1,
        rating: 4.99,
        createdAt: "2017-11-23T16:51:41+00:00",
      },
      {
        id: 2,
        meal: 1,
        rating: 1.02,
        createdAt: "2010-09-22T03:06:16+00:00",
      },
      {
        id: 3,
        meal: 1,
        rating: 1.86,
        createdAt: "2015-11-02T18:10:22+00:00",
      },
      {
        id: 4,
        meal: 1,
        rating: 4.42,
        createdAt: "2018-04-09T21:07:22+00:00",
      },
      {
        id: 5,
        meal: 2,
        rating: 2.88,
        createdAt: "2018-09-08T15:02:53+00:00",
      },
      {
        id: 6,
        meal: 2,
        rating: 3.95,
        createdAt: "2016-11-14T11:35:54+00:00",
      },
      {
        id: 7,
        meal: 2,
        rating: 4.51,
        createdAt: "2015-07-13T07:12:58+00:00",
      },
      {
        id: 8,
        meal: 2,
        rating: 1.6,
        createdAt: "2010-01-25T20:31:17+00:00",
      },
      {
        id: 9,
        meal: 3,
        rating: 2.05,
        createdAt: "2010-04-24T17:18:15+00:00",
      },
      {
        id: 10,
        meal: 3,
        rating: 0.26,
        createdAt: "2015-09-03T03:08:53+00:00",
      },
      {
        id: 11,
        meal: 3,
        rating: 2.09,
        createdAt: "2018-10-07T18:43:39+00:00",
      },
      {
        id: 12,
        meal: 3,
        rating: 3.88,
        createdAt: "2019-03-19T06:25:09+00:00",
      },
      {
        id: 13,
        meal: 4,
        rating: 4.32,
        createdAt: "2018-11-16T12:03:39+00:00",
      },
      {
        id: 14,
        meal: 4,
        rating: 1.31,
        createdAt: "2019-11-20T20:46:25+00:00",
      },
      {
        id: 15,
        meal: 4,
        rating: 4.59,
        createdAt: "2020-12-28T04:40:25+00:00",
      },
      {
        id: 16,
        meal: 4,
        rating: 4.01,
        createdAt: "2011-05-05T02:12:01+00:00",
      },
      {
        id: 17,
        meal: 5,
        rating: 0.71,
        createdAt: "2014-08-22T15:30:01+00:00",
      },
      {
        id: 18,
        meal: 5,
        rating: 1.0,
        createdAt: "2011-05-03T03:45:23+00:00",
      },
      {
        id: 19,
        meal: 5,
        rating: 0.66,
        createdAt: "2016-10-13T18:54:48+00:00",
      },
      {
        id: 20,
        meal: 5,
        rating: 1.34,
        createdAt: "2016-04-04T01:08:42+00:00",
      },
      {
        id: 21,
        meal: 6,
        rating: 4.63,
        createdAt: "2013-11-22T20:27:23+00:00",
      },
      {
        id: 22,
        meal: 6,
        rating: 0.63,
        createdAt: "2012-05-18T02:47:29+00:00",
      },
      {
        id: 23,
        meal: 6,
        rating: 4.06,
        createdAt: "2021-04-03T22:10:48+00:00",
      },
      {
        id: 24,
        meal: 6,
        rating: 0.59,
        createdAt: "2016-12-14T15:30:41+00:00",
      },
      {
        id: 25,
        meal: 7,
        rating: 3.23,
        createdAt: "2013-02-15T15:29:16+00:00",
      },
      {
        id: 26,
        meal: 7,
        rating: 1.75,
        createdAt: "2016-01-14T05:29:28+00:00",
      },
      {
        id: 27,
        meal: 7,
        rating: 2.88,
        createdAt: "2013-12-26T07:48:08+00:00",
      },
      {
        id: 28,
        meal: 7,
        rating: 0.37,
        createdAt: "2018-04-21T07:04:18+00:00",
      },
      {
        id: 29,
        meal: 8,
        rating: 4.04,
        createdAt: "2010-08-16T22:16:55+00:00",
      },
      {
        id: 30,
        meal: 8,
        rating: 4.44,
        createdAt: "2021-12-13T03:35:43+00:00",
      },
      {
        id: 31,
        meal: 8,
        rating: 0.75,
        createdAt: "2011-03-03T04:56:14+00:00",
      },
      {
        id: 32,
        meal: 8,
        rating: 0.78,
        createdAt: "2014-07-11T00:27:26+00:00",
      },
      {
        id: 33,
        meal: 9,
        rating: 1.03,
        createdAt: "2011-09-10T19:00:48+00:00",
      },
      {
        id: 34,
        meal: 9,
        rating: 1.81,
        createdAt: "2021-08-16T21:29:06+00:00",
      },
      {
        id: 35,
        meal: 9,
        rating: 3.43,
        createdAt: "2016-09-05T10:57:29+00:00",
      },
      {
        id: 36,
        meal: 9,
        rating: 4.37,
        createdAt: "2021-12-13T15:33:35+00:00",
      },
      {
        id: 37,
        meal: 10,
        rating: 3.94,
        createdAt: "2011-01-09T17:54:15+00:00",
      },
      {
        id: 38,
        meal: 10,
        rating: 4.52,
        createdAt: "2018-12-02T19:42:08+00:00",
      },
      {
        id: 39,
        meal: 10,
        rating: 4.12,
        createdAt: "2018-09-18T12:21:15+00:00",
      },
      {
        id: 40,
        meal: 10,
        rating: 2.1,
        createdAt: "2017-08-20T23:30:41+00:00",
      },
      {
        id: 41,
        meal: 11,
        rating: 1.4,
        createdAt: "2018-11-05T18:13:35+00:00",
      },
      {
        id: 42,
        meal: 11,
        rating: 3.6,
        createdAt: "2011-08-15T06:51:53+00:00",
      },
      {
        id: 43,
        meal: 11,
        rating: 1.83,
        createdAt: "2017-01-06T00:30:18+00:00",
      },
      {
        id: 44,
        meal: 11,
        rating: 1.62,
        createdAt: "2010-07-26T02:03:11+00:00",
      },
      {
        id: 45,
        meal: 12,
        rating: 3.99,
        createdAt: "2018-08-01T11:32:28+00:00",
      },
      {
        id: 46,
        meal: 12,
        rating: 0.92,
        createdAt: "2017-06-23T06:37:26+00:00",
      },
      {
        id: 47,
        meal: 12,
        rating: 3.29,
        createdAt: "2017-01-06T11:34:23+00:00",
      },
      {
        id: 48,
        meal: 12,
        rating: 0.43,
        createdAt: "2013-01-25T02:58:19+00:00",
      },
      {
        id: 49,
        meal: 13,
        rating: 4.9,
        createdAt: "2013-10-01T16:48:11+00:00",
      },
      {
        id: 50,
        meal: 13,
        rating: 2.1,
        createdAt: "2013-05-04T18:43:36+00:00",
      },
      {
        id: 51,
        meal: 13,
        rating: 2.75,
        createdAt: "2019-04-10T09:16:28+00:00",
      },
      {
        id: 52,
        meal: 13,
        rating: 4.18,
        createdAt: "2016-02-19T22:50:04+00:00",
      },
      {
        id: 53,
        meal: 14,
        rating: 4.88,
        createdAt: "2016-05-04T10:16:02+00:00",
      },
      {
        id: 54,
        meal: 14,
        rating: 1.29,
        createdAt: "2012-05-17T02:37:12+00:00",
      },
      {
        id: 55,
        meal: 14,
        rating: 4.1,
        createdAt: "2020-01-01T05:53:45+00:00",
      },
      {
        id: 56,
        meal: 14,
        rating: 2.72,
        createdAt: "2021-06-14T16:38:56+00:00",
      },
      {
        id: 57,
        meal: 15,
        rating: 0.42,
        createdAt: "2016-10-04T05:02:41+00:00",
      },
      {
        id: 58,
        meal: 15,
        rating: 4.59,
        createdAt: "2019-05-17T13:15:09+00:00",
      },
      {
        id: 59,
        meal: 15,
        rating: 0.19,
        createdAt: "2019-09-10T14:55:31+00:00",
      },
      {
        id: 60,
        meal: 15,
        rating: 1.15,
        createdAt: "2020-06-07T04:29:21+00:00",
      },
      {
        id: 61,
        meal: 16,
        rating: 3.44,
        createdAt: "2021-01-18T11:37:01+00:00",
      },
      {
        id: 62,
        meal: 16,
        rating: 3.43,
        createdAt: "2013-07-11T14:23:21+00:00",
      },
      {
        id: 63,
        meal: 16,
        rating: 0.15,
        createdAt: "2011-02-24T12:54:39+00:00",
      },
      {
        id: 64,
        meal: 16,
        rating: 4.41,
        createdAt: "2017-03-10T22:02:32+00:00",
      },
      {
        id: 65,
        meal: 17,
        rating: 3.13,
        createdAt: "2021-01-22T22:41:42+00:00",
      },
      {
        id: 66,
        meal: 17,
        rating: 4.61,
        createdAt: "2020-04-23T00:00:19+00:00",
      },
      {
        id: 67,
        meal: 17,
        rating: 3.14,
        createdAt: "2016-11-08T12:22:45+00:00",
      },
      {
        id: 68,
        meal: 17,
        rating: 2.88,
        createdAt: "2011-10-11T15:13:25+00:00",
      },
      {
        id: 69,
        meal: 18,
        rating: 0.55,
        createdAt: "2014-07-25T13:36:42+00:00",
      },
      {
        id: 70,
        meal: 18,
        rating: 2.37,
        createdAt: "2016-10-23T11:59:36+00:00",
      },
      {
        id: 71,
        meal: 18,
        rating: 1.54,
        createdAt: "2019-04-18T22:14:20+00:00",
      },
      {
        id: 72,
        meal: 18,
        rating: 0.67,
        createdAt: "2010-03-10T12:28:09+00:00",
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
