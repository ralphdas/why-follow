import User from 'App/Models/User';
import AddQuestionBtnComponent from './ΑddQuestionBtnComponent';
import QuestionComponent from './QuestionComponent';
import { BelongsTo, LucidModel } from '@ioc:Adonis/Lucid/Orm';
import Question from 'App/Models/Question';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function QuestionContainerComponent({
  profileUser,
  isOwnProfile = false,
}: {
  profileUser: User;
  isOwnProfile: boolean;
}) {
  const questions = profileUser.questions;

  const [addNewQuestion, setAddNewQuestion] = useState(false);

  const [parent] = useAutoAnimate();

  return (
    <ul ref={parent as any}>
      {questions.map((question, index) => {
        return (
          <QuestionComponent
            key={question.id}
            index={index + 1}
            {...{ question, isOwnProfile, editModeEnabledByDefault: false }}
          />
        );
      })}
      {addNewQuestion && (
        <QuestionComponent
          index={0}
          key="new"
          question={
            {
              id: 0,
              content: {
                title: '',
                description: '',
              },
              user: profileUser as any as BelongsTo<typeof User, LucidModel>,
            } as any as Question
          }
          isOwnProfile={isOwnProfile}
          editModeEnabledByDefault={true}
          hideQuestion={() => {
            setAddNewQuestion(false);
          }}
        />
      )}
      {isOwnProfile && (
        <li className="flex transition-colors hover:bg-gray-100 border border-gray-300 -mt-px">
          <AddQuestionBtnComponent
            onClick={() => {
              setAddNewQuestion(true);
            }}
          ></AddQuestionBtnComponent>
        </li>
      )}
    </ul>
  );
}
