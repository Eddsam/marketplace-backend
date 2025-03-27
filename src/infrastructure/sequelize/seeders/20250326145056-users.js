"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("user", [
      {
        username: "superadmin@gmail.com",
        password: bcrypt.hashSync("superadmin", 10),
        userTypeId: 1,
      },
      {
        username: "vendedor@gmail.com",
        password: bcrypt.hashSync("vendedor", 10),
        userTypeId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user", null, {});
  },
};
