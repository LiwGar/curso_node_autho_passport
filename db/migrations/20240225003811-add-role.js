'use strict';

const { UserSchema, USER_TABLE} = require('./../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Verificar si la columna "role" ya existe en la tabla "users"
    const columns = await queryInterface.describeTable('users');
    if (!columns.role) {
      // La columna "role" no existe, crearla
      await queryInterface.addColumn('users', 'role', {
        type: Sequelize.STRING,
        allowNull: true
      });
    }
  },

  down: async (queryInterface) => {
    // Eliminar la columna "role" si es necesario
    await queryInterface.removeColumn('users', 'role');
  }
};