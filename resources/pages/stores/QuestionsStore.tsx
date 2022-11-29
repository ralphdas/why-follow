import { Inertia } from '@inertiajs/inertia';
import Question from 'App/Models/Question';
import create from 'zustand';

export interface QuestionsState {
  questions: QuestionState[];
  setQuestions: (questions: Question[]) => void;
  addQuestion: (title: string, description: string) => void;
  toggleEditModeById: (id: number) => void;
  updateContentById: (id: number, title: string, description: string) => void;
  deleteQuestionById: (id: number) => void;
  persistQuestion: (id: number, title: string, description: string) => void;
  removeNonPersistedEntries: () => void;
}

export interface QuestionState {
  id: number;
  title: string;
  description: string;
  editMode: boolean;
  isPersisted: boolean;
}

export const useQuestionsStore = create<QuestionsState>((set) => ({
  questions: [],
  setQuestions: (questions: Question[]) =>
    set((state) => {
      return {
        ...state,
        questions: questions.map((question) => ({
          title: question.content.title,
          description: question.content.description,
          id: question.id,
          editMode: false,
          isPersisted: true,
        })),
      };
    }),

  addQuestion: (title: string, description: string) => {
    set((state) => {
      const id = state.questions.reduce((acc, question) => {
        if (question.id > acc) {
          return question.id;
        }
        return acc;
      }, 0);

      return {
        questions: [
          ...state.questions,
          {
            id: id + 1,
            title,
            description,
            editMode: true,
            isPersisted: false,
          },
        ],
      };
    });
  },
  updateContentById: async (id: number, title: string, description: string) => {
    await Inertia.put(`/api/questions/${id}`, {
      title,
      description,
    });
    set((state) => ({
      ...state,
      questions: state.questions.map((question) => {
        if (question.id === id) {
          return {
            ...question,
            title,
            description,
          };
        }
        return question;
      }),
    }));
  },

  toggleEditModeById: (id: number) => {
    set((state) => ({
      ...state,
      questions: state.questions.map((question) => {
        if (question.id === id) {
          return {
            ...question,
            editMode: !question.editMode,
          };
        }
        return question;
      }),
    }));
  },
  deleteQuestionById: (id: number) => {
    set((state) => {
      const questionToBeDeleted = state.questions.find(
        (question) => question.id === id
      );
      if (questionToBeDeleted?.isPersisted) {
        Inertia.delete(`/api/questions/${id}`);
      }
      const questions = state.questions.filter(
        (question) => question.id !== id
      );
      console.log({ questions });
      return {
        ...state,
        questions,
      };
    });
  },
  removeNonPersistedEntries: () => {
    set((state) => ({
      ...state,
      questions: state.questions.filter((question) => question.isPersisted),
    }));
  },
  persistQuestion: async (id: number, title: string, description: string) => {
    const persistedQuestion = (await Inertia.post('/api/questions', {
      title,
      description,
      languageCode: 'en',
    })) as unknown as Question;
    set((state) => {
      return {
        ...state,
        questions: [
          ...state.questions.filter((question) => question.id !== id),
          {
            id: persistedQuestion.id,
            title: persistedQuestion.content.title,
            description: persistedQuestion.content.description,
            editMode: false,
            isPersisted: true,
          },
        ],
      };
    });
  },
}));
