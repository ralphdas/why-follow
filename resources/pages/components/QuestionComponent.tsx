import { Inertia } from '@inertiajs/inertia';
import Question from 'App/Models/Question';
import React, { useEffect, useRef } from 'react';
import QuestionBtnComponent from './QuestionBtnComponent';
import QuestionTextWrapperComponent from './QuestionTextWrapperComponent';

export default function QuestionComponent({
  index,
  question,
  editModeEnabledByDefault = false,
  isOwnProfile = false,
  hideQuestion,
}: {
  index: number;
  question: Question;
  editModeEnabledByDefault?: boolean;
  isOwnProfile?: boolean;
  hideQuestion?: () => void;
}) {
  const titleRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLSpanElement>(null);
  const initialTitle = question.content.title;
  const initialDescription = question.content.description;

  const [editMode, setEditMode] = React.useState(false);

  useEffect(() => {
    if (editModeEnabledByDefault) {
      setEditMode(true);
    }
  }, [editModeEnabledByDefault]);

  useEffect(() => {
    if (editMode) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        const range = document.createRange();
        range.selectNodeContents(titleRef.current!);
        selection.addRange(range);
        titleRef.current!.focus();
      }
    }
  }, [editMode]);

  function onKeyDownHandler(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      // submit updated values
      save();
    }
    if (e.key === 'Escape') {
      // reset updated values
      reset();
    }
  }

  function save() {
    if (editModeEnabledByDefault) {
      Inertia.post('/api/questions', {
        title: titleRef.current?.innerText as string,
        description: descriptionRef.current?.innerText as string,
        languageCode: 'en',
      });
      hideQuestion && hideQuestion();
    } else {
      Inertia.put('/api/questions/' + question.id, {
        title: titleRef.current?.innerText as string,
        description: descriptionRef.current?.innerText as string,
      });
    }
    setEditMode(false);
  }

  function reset() {
    if (editModeEnabledByDefault) {
      hideQuestion && hideQuestion();
    } else {
      titleRef.current!.innerText = initialTitle;
      descriptionRef.current!.innerText = initialDescription;
      setEditMode(false);
    }
  }

  return (
    <li>
      <div
        onKeyDown={onKeyDownHandler}
        className="flex flex-col mt-6 border border-gray-300 md:flex-row"
      >
        <QuestionTextWrapperComponent
          content={question.content}
          index={index}
          editMode={editMode}
          titleRef={titleRef}
          descriptionRef={descriptionRef}
        ></QuestionTextWrapperComponent>
        {isOwnProfile && (
          <div className="flex-none flex">
            {!editMode ? (
              <>
                <QuestionBtnComponent
                  iconName="Pencil"
                  label="edit"
                  onClick={() => {
                    setEditMode(true);
                  }}
                ></QuestionBtnComponent>
                <QuestionBtnComponent
                  iconName="Trash"
                  label="delete"
                  onClick={() => {
                    console.log('delete');
                    Inertia.delete('/api/questions/' + question.id);
                  }}
                ></QuestionBtnComponent>
              </>
            ) : (
              <>
                <QuestionBtnComponent
                  iconName="FloppyDisk"
                  label="save"
                  onClick={() => {
                    save();
                  }}
                ></QuestionBtnComponent>

                <QuestionBtnComponent
                  iconName="X"
                  label="cancel"
                  onClick={() => {
                    reset();
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
