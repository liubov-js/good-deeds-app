'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('user_roles', 'user_friends');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('user_friends', 'user_roles');
  }
};
