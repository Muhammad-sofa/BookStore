'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Books', 
      [
        {
          title: 'David Copperfield',
          author: 'Charles Dickens',
          image: '/uploads/image 1.png',
          published: new Date(),
          price: 20000,
          stock: 10,
          user: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'A Tale of Two Cities',
          author: 'Charles Dickens',
          image: '/uploads/image 2.png',
          published: new Date(),
          price: 20000,
          stock: 10,
          user: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Moby Dick',
          author: 'Herman Melville',
          image: '/uploads/image 3.png',
          published: new Date(),
          price: 20000,
          stock: 10,
          user: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Lord of the Rings',
          author: 'J. R. R. Tolkien',
          image: '/uploads/image 4.png',
          published: new Date(),
          price: 20000,
          stock: 10,
          user: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], 
      {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
