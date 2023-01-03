import QuestionModelController from '../Models/QuestionModelController';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Question from 'App/Models/Question';

interface CreateRequestBody {
  title: string;
  description: string;
  languageCode: string;
}
interface EditRequestBody {
  questionId: number;
  title: string;
  description: string;
}

export default class QuestionHttpController {
  private _questionModelController: QuestionModelController;
  constructor() {
    this._questionModelController = new QuestionModelController();
  }

  public async create({
    auth,
    response,
    request,
  }: HttpContextContract): Promise<void> {
    // check if there is a logged in user

    if (!auth.user) {
      return response.redirect('/');
    }
    const { title, description, languageCode } = <CreateRequestBody>(
      request.body()
    );

    const newQuestion = await this._questionModelController.create({
      userId: auth.user.id,
      title,
      description,
      languageCode,
      editMode: true,
    });

    await newQuestion.save();

    response.redirect(`/profile/${auth.user.username}`);
  }

  public async edit({
    auth,
    response,
    request,
  }: HttpContextContract): Promise<void> {
    // check if there is a logged in user

    if (!auth.user) {
      return response.redirect('/');
    }
    const { questionId } = request.params();

    if (!questionId) {
      throw new Error('questionId is required');
    }

    const { title, description } = <EditRequestBody>request.body();

    await this._questionModelController.edit({
      questionId,
      title,
      description,
    });

    response.redirect(`/profile/${auth.user.username}`);
  }

  public async destroy({
    auth,
    response,
    request,
  }: HttpContextContract): Promise<void> {
    // check if there is a logged in user

    if (!auth.user) {
      return response.redirect('/');
    }
    const { questionId } = request.params();

    await this._questionModelController.destroy({
      questionId,
    });

    response.redirect(`/profile/${auth.user.username}`);
  }

  public async index({ auth, response }: HttpContextContract): Promise<void> {
    // check if there is a logged in user

    if (!auth.user) {
      return response.redirect('/');
    }
    const questions: Question[] = await this._questionModelController.getAll({
      userId: auth.user.id,
    });

    response.json({ payload: questions });
  }

  public async show({
    auth,
    response,
    params,
  }: HttpContextContract): Promise<void> {
    // check if there is a logged in user

    if (!auth.user) {
      return response.redirect('/');
    }
    const { questionId } = params;

    const question: Question = await this._questionModelController.get({
      questionId: Number(questionId),
    });

    response.json({ payload: question });
  }
}
