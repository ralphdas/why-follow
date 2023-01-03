import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
  protected tableName = 'answers';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.jsonb('content').notNullable();
      table.string('language_code', 2).notNullable(); // ISO 639-1 "fr" "nl"
      table.string('author_id').notNullable().references('users.id');
      table
        .integer('question_id')
        .notNullable()
        .unsigned()
        .references('questions.id')
        .onDelete('CASCADE');
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
