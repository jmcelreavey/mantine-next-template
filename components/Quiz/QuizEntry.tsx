import {
  Badge,
  Button,
  Card,
  Divider,
  Image,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { Heart } from 'tabler-icons-react';
import { showNotification } from '@mantine/notifications';
import { QuizItem } from '../../types/QuizItem';

type QuizEntryProps = {} & QuizItem;
export const QuizEntry = (
  props: QuizEntryProps & { lastQuestion?: boolean; onCorrectAnswer?: () => void }
) => {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  const form = useForm({
    initialValues: {
      answer: '',
    },

    validationRules: {
      answer: (answer) => answer === props.answer,
    },

    errorMessages: {
      answer: props.errorMessage,
    },
  });

  return (
    <Card shadow="sm" sx={{ maxWidth: 580 }} mx="auto">
      <Card.Section>
        <Image src={props.imageUrl} />
      </Card.Section>

      <Card.Section style={{ margin: 7 }}>
        <Text weight={500} align="justify">
          <Badge color="green" style={{ marginRight: 7 }} variant="light">
            Q{props.id}.
          </Badge>
          {props.question}
        </Text>
        <Divider style={{ marginTop: 7, marginBottom: 7 }} />
        <Text size="sm" style={{ color: secondaryColor }}>
          {props.hint}
        </Text>
      </Card.Section>

      <Card.Section style={{ margin: 7 }}>
        <form
          onSubmit={form.onSubmit(() => {
            // Show dialog if it's a react component
            // Set showComponent to true and render it
            showNotification({
              message: props.successMessage,
              autoClose: true,
            });
            form.reset();
            props.onCorrectAnswer?.();
          })}
        >
          <TextInput
            icon={<Heart fill="red" size={16} />}
            placeholder="Your answer"
            {...form.getInputProps('answer')}
          />
          <Button type="submit" variant="filled" color="green" style={{ marginTop: 7 }} fullWidth>
            {props.buttonContent}
          </Button>
        </form>
      </Card.Section>
    </Card>
  );
};
