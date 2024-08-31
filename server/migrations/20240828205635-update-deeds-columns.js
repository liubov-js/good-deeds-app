'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.renameColumn('deeds', 'deel', 'deed');

     await queryInterface.addColumn('deeds', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.removeColumn('deeds', 'userId');

     await queryInterface.renameColumn('deeds', 'deed', 'deel');
  }
};
