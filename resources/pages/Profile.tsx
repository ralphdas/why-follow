import User from 'App/Models/User';
import QuestionContainerComponent from './components/QuestionContainerComponent';

export default function Profile({
  profileUser,
  isOwnProfile,
}: {
  profileUser: User;
  isOwnProfile: boolean;
}) {
  return (
    <QuestionContainerComponent
      profileUser={profileUser}
      isOwnProfile={isOwnProfile}
    ></QuestionContainerComponent>
  );
}
