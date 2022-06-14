import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QUIZ_DATA } from '../../data/QuizData';
import { Quiz } from './Quiz';
import { QuizCompletedContent } from './QuizCompletedContent';

const argTypes = {
  quizEntries: QUIZ_DATA,
  completionContent: (
    <QuizCompletedContent
      message={`<b>Laura,</b>
                <br />
                Happy Birthday, I thought of writing something nice inside your card but then I decided to
                write a web address instead, much more romantice 😊 <br />
                I&apos;ve been at this for about 3 hours now, and I&apos;m still not finished but trust me,
                you&apos;re worth it. <br />
                I honestly don&apos;t know what I&apos;d do without you, or for that matter how I survived
                before we met. <br />
                You make my every day better and so I hope this gives you the slightest idea of how much I
                love you. <br />
                I&apos;d do anything for you, all you need to do is ask. <br />
                Have a great birthday! (WITH ME! :D). <br />
                <br />
                <b>
                  Love you, always.
                  <br />
                  <br />
                  <b>P.S: HAPPY FRICKEN BIRTHDAY!!!</b>
                </b>`}
      imageUrl="/images/heart.gif"
      songUrl="/audio/heart.mp3"
    />
  ),
};

export default {
  title: 'Quiz',
  component: Quiz,
  argTypes,
} as ComponentMeta<typeof Quiz>;

const Template: ComponentStory<typeof Quiz> = (args) => <Quiz {...args} />;

export const Usage = Template.bind({});
Usage.args = argTypes;

export const LastQuestion = Template.bind({});
LastQuestion.args = {
  quizEntries: [QUIZ_DATA[5]],
  completionContent: argTypes.completionContent,
};

export const NoQuestions = Template.bind({});
NoQuestions.args = {
  quizEntries: [],
  completionContent: argTypes.completionContent,
};
