import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'questions';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.jsonb('content').notNullable();
      table.string('language_code', 2).notNullable(); // ISO 639-1 "fr" "nl"
      table.string('user_id').notNullable().references('users.id');
      table.string('created_by').notNullable().references('users.id');
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
