/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('post_table').del();
  await knex('post_table').insert([
    {
      slug: 'first-post',
      title: 'First Post',
      description: 'This is the first post.',
      body: 'This is the first post body',
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
      userId: 5,
    },
    {
      slug: 'second-post',
      title: 'Second Post',
      description: 'This is the second post.',
      body: 'This is the secons post body',
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
      userId: 6,
    },
  ]);
};
