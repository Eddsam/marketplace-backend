"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("user_type", [
      {
        rolname: "admin",
      },
      {
        rolname: "vendedor",
      },
      {
        rolname: "cliente",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user_type", null, {});
  },
};
