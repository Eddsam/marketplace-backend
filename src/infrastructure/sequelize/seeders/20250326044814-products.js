"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("product", [
      {
        name: "Product name 01",
        code: "PRODUCT-NM-01",
        price: 120000,
        userId: 2,
      },
      {
        name: "Product name 02",
        code: "PRODUCT-NM-02",
        price: 150000,
        userId: 2,
      },
      {
        name: "Product name 03",
        code: "PRODUCT-NM-03",
        price: 225000,
        userId: 2,
      },
      {
        name: "Product name 04",
        code: "PRODUCT-NM-04",
        price: 230000,
        userId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("product", null, {});
  },
};
