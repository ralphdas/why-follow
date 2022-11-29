import Answer from 'App/Models/Answer';

export default class AnswerModelController {
  /**
   * Function to create a new answer
   *
   * @param {{
   *     questionId: number;
   *     title: string;
   *     description: string;
   *     languageCode: string;
   *     userId: string;
   *   }} {
   *     questionId,
   *     title,
   *     description,
   *     languageCode,
   *     userId,
   *   }
   * @memberof AnswerModelController
   */
  public async create({
    questionId,
    title,
    description,
    languageCode,
    userId,
  }: {
    questionId: number;
    title: string;
    description: string;
    languageCode: string;
    userId: string;
  }) {
    const answerInstance: Answer = new Answer();
    answerInstance.merge({
      questionId,
      content: { title, description },
      languageCode,
      authorId: userId,
    });
    await answerInstance.save();
  }

  /**
   * Function to create many answers
   *
   * @param {{
   *     questionId: number;
   *     titles: string[];
   *     descriptions: string[];
   *     languageCode: string;
   *     userId: string;
   *   }} {
   *     questionId,
   *     titles,
   *     descriptions,
   *     languageCode,
   *     userId,
   *   }
   * @memberof AnswerModelController
   */
  public async createMany({
    questionId,
    titles,
    descriptions,
    languageCode,
    userId,
  }: {
    questionId: number;
    titles: string[];
    descriptions: string[];
    languageCode: string;
    userId: string;
  }) {
    const answerInstances: Answer[] = [];
    for (let i = 0; i < titles.length; i++) {
      const answerInstance: Answer = new Answer();
      answerInstance.merge({
        questionId,
        content: { title: titles[i], description: descriptions[i] },
        languageCode,
        authorId: userId,
      });
      answerInstances.push(answerInstance);
    }
    await Answer.createMany(answerInstances);
  }
}
