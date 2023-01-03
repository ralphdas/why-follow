import User from 'App/Models/User';
import AnswerModelController from './AnswerModelController';
import QuestionModelController from './QuestionModelController';

export default class ProfileModelController {
  private _questionModelController: QuestionModelController;
  private _answerModelController: AnswerModelController;
  constructor() {
    this._questionModelController = new QuestionModelController();
    this._answerModelController = new AnswerModelController();
  }
  public async activateAndInit(user: User) {
    // enable profile
    user.hasProfile = true;
    await user.save();

    const createdQuestion = await this._questionModelController.create({
      userId: user.id,
      title: 'Favorite color?',
      description: 'Explain why you like this color.',
      languageCode: 'en',
      editMode: false,
    });

    await createdQuestion.save();

    const titles = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
    const descriptions = [
      'Red is the color of blood.',
      'Green is the color of grass.',
      'Blue is the color of the sky.',
      'Yellow is the color of the sun.',
      'Orange is the color of an orange.',
    ];

    await this._answerModelController.createMany({
      questionId: createdQuestion.id,
      titles,
      descriptions,
      languageCode: 'en',
      userId: user.id,
    });
  }

  public async deactivate(user: User) {
    // disable profile
    user.hasProfile = false;
    await user.save();
  }

  /**
   * Get a user by username
   *
   * @param {string} username
   * @return {*}  {(Promise<User | null>)}
   * @memberof ProfileModelController
   */
  public async getByUsername(username: string): Promise<User | null> {
    // check if username has a profile on the site
    const foundProfile = await User.query()
      .where('username', username)
      .where('has_profile', 1)
      .preload('questions', async (question) => {
        return await question.preload('answers');
      })
      .first();

    return foundProfile;
  }
}
