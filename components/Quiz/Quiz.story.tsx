import { QUIZ_DATA } from '../../data/QuizData';
import { Quiz } from './Quiz';

export default {
  title: 'Quiz',
};

export const Usage = () => <Quiz quizEntries={QUIZ_DATA} />;
