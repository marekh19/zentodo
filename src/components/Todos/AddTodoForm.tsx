import { ActionIcon, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { SendHorizonal } from 'lucide-react'

import { type Todo } from '@/stores/useTodoStore'
import { useTodos } from '@/hooks/useTodos'

type FormValues = Pick<Todo, 'title'>

type Props = {
  closeDrawer: () => void
}

export const AddTodoForm: React.FC<Props> = ({ closeDrawer }) => {
  const { add } = useTodos()

  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
    },

    validate: {
      title: (value) =>
        value.trim().length < 2 ? 'Todo must have at least 2 letters' : null,
    },
  })

  const handleSubmit = (data: FormValues) => {
    add(data.title)
    closeDrawer()
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Group align="center" gap="xs" wrap="nowrap" justify="space-between">
        <TextInput
          size="lg"
          w="100%"
          variant="filled"
          placeholder="What would you like to do?"
          radius="lg"
          key={form.key('title')}
          {...form.getInputProps('title')}
        />
        <ActionIcon title="Add todo" size="xl" radius="100%" type="submit">
          <SendHorizonal />
        </ActionIcon>
      </Group>
    </form>
  )
}
