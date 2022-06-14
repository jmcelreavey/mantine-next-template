import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QUIZ_DATA } from '../../data/QuizData';
import { Quiz } from './Quiz';

export default {
  title: 'Quiz',
  component: Quiz,
  argTypes: {
    quizEntries: QUIZ_DATA,
  },
} as ComponentMeta<typeof Quiz>;

const Template: ComponentStory<typeof Quiz> = (args) => <Quiz {...args} />;

export const Usage = Template.bind({});
Usage.args = {
  quizEntries: QUIZ_DATA,
};

export const LastQuestion = Template.bind({});
LastQuestion.args = {
  quizEntries: [QUIZ_DATA[5]],
};

export const NoQuestions = Template.bind({});
NoQuestions.args = {
  quizEntries: [],
};
