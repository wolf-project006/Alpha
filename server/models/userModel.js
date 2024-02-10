const knex = require('../db/knex');

const createUser = async (username, email, password) => {
  //check in already exist
  const existingUser = await knex('user_table').where({ username }).first();

  if (existingUser) {
    throw new Error('Username already exists');
  }

  return await knex('user_table').insert({ username, email, password });
};

const getUserByUsername = async (username) => {
  return await knex('user_table').where({ username }).first();
};

module.exports = {
  createUser,
  getUserByUsername,
};
