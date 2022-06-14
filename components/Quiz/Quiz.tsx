import { Modal } from '@mantine/core';
import { useEffect, useState } from 'react';
import { QuizItem } from '../../types/QuizItem';
import { QuizEntry } from './QuizEntry';

type QuizProps = { quizEntries: QuizItem[]; completionContent: React.ReactNode };
export const Quiz = (props: QuizProps) => {
  if (props.quizEntries.length === 0) {
    return null;
  }

  const [questionNumber, setQuestionNumber] = useState(1);
  const [quizEntry, setQuizEntry] = useState(props.quizEntries[0]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setQuizEntry(props.quizEntries[questionNumber - 1]);
  }, [questionNumber]);

  const onCorrectAnswer = () => {
    const nextQuestionNumber = questionNumber + 1;
    setQuestionNumber(nextQuestionNumber);

    const isLastQuestion = props.quizEntries.length < nextQuestionNumber;
    if (isLastQuestion) {
      setShowModal(true);
      setQuestionNumber(1);
    }
  };

  return (
    <>
      <Modal withCloseButton={false} opened={showModal} onClose={() => setShowModal(false)}>
        {props.completionContent}
      </Modal>
      <QuizEntry {...quizEntry} id={questionNumber} onCorrectAnswer={onCorrectAnswer} />
    </>
  );
};
