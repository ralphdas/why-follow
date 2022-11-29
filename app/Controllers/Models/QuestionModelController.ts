import Question from 'App/Models/Question';

export default class QuestionModelController {
  public async create({
    userId,
    title,
    description,
    languageCode,
  }: {
    userId: string;
    title: string;
    description: string;
    languageCode: string;
  }) {
    // create a demo question
    const demoQuestion: Question = new Question();
    demoQuestion.content = { title, description };
    demoQuestion.userId = userId;
    demoQuestion.languageCode = languageCode;
    return await demoQuestion.save();
  }

  public async edit({
    questionId,
    title,
    description,
  }: {
    questionId: number;
    title: string;
    description: string;
  }) {
    // find the question and update it
    const question: Question = await Question.findOrFail(questionId);
    question.content = { title, description };
    return await question.save();
  }

  public async get({ questionId }: { questionId: number }) {
    // find the question and return it
    const question: Question = await Question.query()
      .preload('user')
      .preload('answers')
      .where('id', questionId)
      .firstOrFail();
    return question;
  }

  public async getAll({ userId }: { userId: string }) {
    // find all questions and return them
    const questions: Question[] = await Question.query()
      .preload('user')
      .preload('answers')
      .where('userId', userId)
      .orderBy('id', 'desc')
      .limit(10)
      .exec();
    return questions;
  }

  public async destroy({ questionId }: { questionId: number }) {
    // find the question and delete it
    const question: Question = await Question.findOrFail(questionId);
    await question.delete();
  }
}
