import User from 'App/Models/User';
import AddQuestionBtnComponent from './components/ΑddQuestionBtnComponent';
import QuestionComponent from './components/QuestionComponent';
import { useQuestionsStore } from './stores/QuestionsStore';
import { useEffect } from 'react';

export default function Profile({
  profileUser,
  isOwnProfile = false,
}: {
  profileUser: User;
  isOwnProfile: boolean;
}) {
  const [questions, setQuestions, addQuestion] = useQuestionsStore((state) => [
    state.questions,
    state.setQuestions,
    state.addQuestion,
  ]);

  useEffect(() => {
    setQuestions(profileUser.questions);
  }, [profileUser]);

  return (
    <ul>
      {questions.map((question) => (
        <QuestionComponent
          key={question.id}
          question={question}
          editMode={question.editMode}
          isEditModeEnabled={isOwnProfile}
        />
      ))}
      {isOwnProfile && (
        <li className="flex transition-colors hover:bg-gray-100 border border-gray-300 -mt-px">
          <AddQuestionBtnComponent
            onClick={() => {
              addQuestion('New question', 'New description');
            }}
          ></AddQuestionBtnComponent>
        </li>
      )}
    </ul>
  );
}
