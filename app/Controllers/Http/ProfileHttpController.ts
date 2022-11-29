import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ProfileModelController from '../Models/ProfileModelController';

export default class ProfileHttpController {
  private _profileModelController: ProfileModelController;
  constructor() {
    this._profileModelController = new ProfileModelController();
  }
  /**
   *  Create a function if you are already logged in
   */
  public async create({ auth, response }: HttpContextContract) {
    // check if there is a logged in user
    const loggedInUser = await auth.authenticate();

    if (!loggedInUser) {
      return response.redirect('/');
    }

    this._profileModelController.activateAndInit(loggedInUser);

    // we redirect to the user profile
    return response.redirect(`/profile/${loggedInUser.username}`);
  }

  public async show({
    params: { username },
    auth: { user: loggedInUser },
    inertia,
    response,
  }: HttpContextContract) {
    if (!username) {
      // if there is no username given redirect to profile of user if he has one
      return response.redirect(
        // if not redirect back to main screen
        loggedInUser?.hasProfile ? `/profile/${loggedInUser.username}` : `/`
      );
    }

    // check if username has a profile on the site
    const profileUser = await this._profileModelController.getByUsername(
      username
    );

    if (!profileUser) {
      // if there is no profile for this user redirect to main screen
      return response.redirect('/');
    }

    return inertia.render('Profile', {
      profileUser,
      isOwnProfile: loggedInUser?.username === username,
    });
  }
}
