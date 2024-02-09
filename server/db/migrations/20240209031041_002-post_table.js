/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("post_table", (table) => {
    table.increments("id").primary();
    table.text("slug").notNullable();
    table.text("title").notNullable();
    table.text("description").notNullable();
    table.text("body").notNullable();
    table
      .timestamp("createdAt", { precision: 3 })
      .notNullable()
      .defaultTo(knex.fn.now(3));
    table
      .timestamp("updateAt", { precision: 3 })
      .notNullable()
      .defaultTo(knex.fn.now(3));
    table.foreign("userId").references("user_table.id").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("post_table");
};
