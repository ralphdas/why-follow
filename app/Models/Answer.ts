import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import Question from './Question';
// import User from './User';
// import Question from './Question';

export default class Answer extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({
    consume: (value) => JSON.parse(value),
    prepare: (value) => JSON.stringify(value),
  })
  public content: object;

  @column()
  public languageCode: string;

  @column()
  public authorId: string;

  @column()
  public questionId: Number;

  @belongsTo(() => Question)
  public question: BelongsTo<typeof Question>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
