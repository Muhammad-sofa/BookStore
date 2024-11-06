'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'Categories',
        [
          {
            name: 'Business & Economics',
            user: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Science & Technology',
            user: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: 'Health & Medicine',
            user: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
        ], 
        {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
