import { DateTime } from 'luxon';
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  computed,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm';
import User from './User';
import Answer from './Answer';

export default class Question extends BaseModel {
  private _editMode: boolean = false;

  @column({ isPrimary: true })
  public id: number;

  @column({
    consume: (value) => JSON.parse(value),
    prepare: (value) => JSON.stringify(value),
  })
  public content: { title: string; description: string };

  // https://www.npmjs.com/package/languagedetect
  // iso-2
  @column()
  public userId: string;

  @column()
  public languageCode: string;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @belongsTo(() => User, { foreignKey: 'createdBy' })
  public createdByUser: BelongsTo<typeof User>;

  @hasMany(() => Answer)
  public answers: HasMany<typeof Answer>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @computed()
  public get editMode() {
    return this._editMode;
  }
}
