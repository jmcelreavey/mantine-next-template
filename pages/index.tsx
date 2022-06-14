import { Box, Button, Center } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Heart } from 'tabler-icons-react';
import { Quiz } from '../components/Quiz/Quiz';
import { QuizCompletedContent } from '../components/Quiz/QuizCompletedContent';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { QUIZ_DATA } from '../data/QuizData';

export default function HomePage() {
  const { height, width } = useViewportSize();

  if (height === 0 || width === 0) {
    return null;
  }

  return (
    <Box style={{ width, height }}>
      <div style={{ padding: 7 }}>
        <Button
          component="a"
          href="/archive/classicQuiz.html"
          leftIcon={<Heart fill="red" size={18} />}
          variant="gradient"
          gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
        >
          Classic Version
        </Button>
      </div>
      <Center>
        <ColorSchemeToggle />
        <Quiz
          quizEntries={QUIZ_DATA}
          completionContent={
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
              songUrl="/audio/myLife.mp3"
            />
          }
        />
      </Center>
    </Box>
  );
}
