import { QuizItem } from '../types/QuizItem';

export const QUIZ_DATA = [
  new QuizItem({
    question: "What is you're FULL name?",
    answer: 'Laura Nixon',
    successMessage: "Phew, just making sure it's who I thought it was!",
    imageUrl: '/images/arrow.gif',
    hint: 'Bear with me a moment.',
    buttonContent: "That's my name, I swear!",
  }),
  new QuizItem({
    question: 'Sum up our first date with one name',
    answer: 'Simon',
    successMessage: 'You probably enjoyed that question a bit too much..',
    imageUrl: '/images/django.gif',
    hint: "You'll enjoy this question. :)",
    buttonContent: "Maybe it's too easy?",
  }),
  new QuizItem({
    question: "When asked for a piece of archery equipment back, what's the correct response?",
    answer: 'Handshake',
    successMessage: "Bet you didn't enjoy that one as much!",
    imageUrl: '/images/handshake.gif',
    hint: 'One word answer for this, feels like it should be two though.',
    buttonContent: 'I should have made these harder..',
  }),
  new QuizItem({
    question: 'A quote from the notebook',
    answer: "If you're a bird I'm a bird",
    successMessage: "Isn't this a fun Birthday surprise?",
    imageUrl: '/images/bird.gif',
    hint: 'Make sure your grammar is right! HAIL HITLER! :P',
    buttonContent: "What's even the point in all these questions?",
  }),
  new QuizItem({
    question: "What's an appropriate thing to say before a kiss?",
    answer: 'What?',
    successMessage: "Surprised you're still going!",
    imageUrl: '/images/kiss.gif',
    hint: 'One word, question',
    buttonContent: 'You should just quit now.. Who knows how many is left?',
  }),
  new QuizItem({
    question: 'When did we become Boyfriend/Girlfriend',
    answer: '18/03/13',
    successMessage: 'Happy Birthday!',
    imageUrl: '/images/valentines.gif',
    hint: 'In the format DD/MM/YY',
    buttonContent: 'You made it to the end!',
  }),
];
