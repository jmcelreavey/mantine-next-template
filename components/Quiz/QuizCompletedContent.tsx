import { Card, Center, Image, Text, useMantineTheme } from '@mantine/core';

type QuizCompletedContentProps = { songUrl?: string; imageUrl?: string; message: string };
export const QuizCompletedContent = (props: QuizCompletedContentProps) => {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={props.imageUrl} />
      </Card.Section>

      <Card.Section>
        <Center>
          <audio hidden controls autoPlay>
            <track kind="captions" srcLang="en" src={props.songUrl} />
            <source src={props.songUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Center>
      </Card.Section>

      <Text
        dangerouslySetInnerHTML={{ __html: props.message }}
        size="md"
        style={{ color: secondaryColor, lineHeight: 1.5, marginTop: 7 }}
      />
    </Card>
  );
};
