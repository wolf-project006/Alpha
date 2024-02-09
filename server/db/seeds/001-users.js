/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_table").del();
  await knex("user_table").insert([
    {
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      email: "johndoe@example.com",
      password: "password123",
      bio: "Love making arts and music.freelacing.",
      image: null,
    },
    {
      first_name: "Jane",
      last_name: "Smith",
      username: "janesmith",
      email: "janesmith@example.com",
      password: "password456",
      bio: "Making art for a living. 20+ experience in the fie",
      image: null,
    },
  ]);
};
