import { DateTime } from 'luxon';
import {
  BaseModel,
  beforeCreate,
  column,
  HasMany,
  hasMany,
} from '@ioc:Adonis/Lucid/Orm';
import { random } from 'nano-crypto';
import Question from './Question';

export default class User extends BaseModel {
  public static selfAssignPrimaryKey = true;

  @column({ isPrimary: true })
  public id: string;

  @column()
  public username: string;

  @column()
  public externalId: string;

  @column()
  public avatarUrl: string;

  @column()
  public email: string;

  @column()
  public rememberMeToken: string;

  @column({
    consume: (value) => Boolean(value),
    prepare: (value) => (value ? 1 : 0),
  })
  public hasProfile: boolean;

  @column({
    consume: (value) => JSON.parse(value),
    prepare: (value) => JSON.stringify(value),
  })
  public meta: Object;

  @column.dateTime()
  public lastLogin: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Question, {
    foreignKey: 'userId',
  })
  public questions: HasMany<typeof Question>;

  @beforeCreate()
  public static async makeRandomId(user) {
    user.id = random(10).alphanumeric();
  }
}
