import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      // create the id string
      table.string('id', 16).notNullable().unique();
      table.string('username', 255).notNullable().unique();
      table.string('external_id', 255).notNullable();
      table.string('avatar_url', 2048).nullable();
      table.boolean('has_profile').defaultTo(false);
      table.string('email', 255).notNullable().unique().index();
      table.jsonb('meta').nullable();
      table.timestamp('last_login', { useTz: true });
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
