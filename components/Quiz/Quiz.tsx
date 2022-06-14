import { useEffect, useState } from 'react';
import { QuizItem } from '../../types/QuizItem';
import { QuizEntry } from './QuizEntry';

type QuizProps = { quizEntries: QuizItem[] };
export const Quiz = (props: QuizProps) => {
  if (props.quizEntries.length === 0) {
    return null;
  }

  const [questionNumber, setQuestionNumber] = useState(1);
  const [quizEntry, setQuizEntry] = useState(props.quizEntries[0]);

  useEffect(() => {
    setQuizEntry(props.quizEntries[questionNumber - 1]);
  }, [questionNumber]);

  return (
    <QuizEntry
      {...quizEntry}
      id={questionNumber}
      hideButton={props.quizEntries.length === questionNumber}
      onCorrectAnswer={() => setQuestionNumber(questionNumber + 1)}
    />
  );
};
