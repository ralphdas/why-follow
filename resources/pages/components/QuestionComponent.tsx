import React from 'react';
import { QuestionState, useQuestionsStore } from '../stores/QuestionsStore';
import QuestionBtnComponent from './QuestionBtnComponent';
import QuestionTextWrapperComponent from './QuestionTextWrapperComponent';

export default function QuestionComponent({
  question,
  isEditModeEnabled,
  editMode,
}: {
  question: QuestionState;
  isEditModeEnabled: boolean;
  editMode: boolean;
}) {
  const [
    toggleEditModeById,
    deleteQuestionById,
    updateContentById,
    persistQuestion,
    removeNonPersistedEntries,
  ] = useQuestionsStore((state) => [
    state.toggleEditModeById,
    state.deleteQuestionById,
    state.updateContentById,
    state.persistQuestion,
    state.removeNonPersistedEntries,
  ]);

  const toggleEditMode = () => {
    toggleEditModeById(question.id);
  };

  function updateOrPersistQuestion() {
    const title = document.getElementById(
      `question-${question.id}-title`
    ) as HTMLSpanElement;
    const description = document.getElementById(
      `question-${question.id}-description`
    ) as HTMLSpanElement;

    // update or persist question
    if (question.isPersisted) {
      // update
      updateContentById(question.id, title.innerText, description.innerText);
      toggleEditMode();
    } else {
      // persist
      persistQuestion(question.id, title.innerText, description.innerText);
      toggleEditMode();
    }
  }

  function onKeyDownHandler(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      // submit updated values
      updateOrPersistQuestion();
    }
    if (e.key === 'Escape') {
      // reset updated values
      toggleEditMode();
    }
  }

  return (
    <li>
      <div
        onKeyDown={onKeyDownHandler}
        className="flex flex-col mt-6 border border-gray-300 md:flex-row"
      >
        <QuestionTextWrapperComponent
          content={{ title: question.title, description: question.description }}
          index={question.id}
          editMode={editMode}
        ></QuestionTextWrapperComponent>
        {isEditModeEnabled && (
          <div className="flex-none flex">
            {!editMode ? (
              <>
                <QuestionBtnComponent
                  iconName="Pencil"
                  label="edit"
                  onClick={toggleEditMode}
                ></QuestionBtnComponent>
                <QuestionBtnComponent
                  iconName="Trash"
                  label="delete"
                  onClick={() => {
                    deleteQuestionById(question.id);
                  }}
                ></QuestionBtnComponent>
              </>
            ) : (
              <>
                <QuestionBtnComponent
                  iconName="FloppyDisk"
                  label="save"
                  onClick={() => {
                    updateOrPersistQuestion();
                  }}
                ></QuestionBtnComponent>

                <QuestionBtnComponent
                  iconName="X"
                  label="cancel"
                  onClick={() => {
                    toggleEditMode();
                    removeNonPersistedEntries();
                  }}
                ></QuestionBtnComponent>
              </>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
