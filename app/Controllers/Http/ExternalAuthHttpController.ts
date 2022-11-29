import { Exception } from '@adonisjs/core/build/standalone';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import { DateTime } from 'luxon';

export default class ExternalAuthHttpController {
  /**
   *  Redirect
   */
  public redirect({
    ally,
    params: { oauthProviderString },
  }: HttpContextContract) {
    try {
      return ally.use(oauthProviderString).redirect();
    } catch (error) {
      throw new Exception('OAUTH_ERROR_UNKNOWN_AUTH');
    }
  }

  /**
   *
   * Function to respond to callback from external oauth provider
   */
  public async callback({
    ally,
    params: { oauthProviderString },
    auth,
    response,
  }: HttpContextContract) {
    let currentOauthProvider;
    try {
      currentOauthProvider = ally.use(oauthProviderString);
    } catch (error) {
      throw new Exception('OAUTH_ERROR_UNKNOWN_AUTH');
    }

    /**
     * User has explicitly denied the login request
     */
    if (currentOauthProvider.accessDenied()) {
      throw new Exception('OAUTH_ERROR_ACCESS_DENIED');
    }

    /**
     * Unable to verify the CSRF state
     */
    if (currentOauthProvider.stateMisMatch()) {
      throw new Exception('OAUTH_ERROR_CODE_EXPIRED');
    }

    /**
     * There was an unknown error during the redirect
     */
    if (currentOauthProvider.hasError()) {
      // return currentOauthProvider.getError();
      throw new Exception('OAUTH_ERROR_GENERAL_ERROR');
    }

    /**
     * Finally, access the user
     */
    try {
      /**
       *  @TODO: we definitely want more from info from this object like:
       *  - Amount of followers
       *  - Amount of people following
       *  - Profile background URL
       *  - Number of Posts (Tweets)
       *  - Number of likes
       *  - Number of Lists
       */

      const { email, nickName, avatarUrl, original, id } =
        await currentOauthProvider.user();

      const loggedInUser = await User.firstOrNew({ email } as {
        email: string;
      });

      loggedInUser
        .merge({
          ...(email && { email }),
          ...(nickName && { username: nickName }),
          ...(id && { externalId: id }),
          ...(avatarUrl && { avatarUrl }),
          ...(original && { meta: JSON.stringify(original) }),
          lastLogin: DateTime.fromJSDate(new Date()),
        })
        .save();

      await auth.use('web').login(loggedInUser);

      return response.redirect(`/profile/${loggedInUser.username}`);
    } catch (error) {
      return error;
    }
  }
}
