import { useState } from 'react'
import {
  ActionIcon,
  Checkbox,
  Group,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core'
import { TrashIcon } from 'lucide-react'

import { type Todo } from '@/stores/useTodoStore'
import { useTodos } from '@/hooks/useTodos'

type Props = {
  todo: Todo
}

export const TodoDetail: React.FC<Props> = ({ todo }) => {
  const { update, remove } = useTodos()

  const [newText, setNewText] = useState(todo.title)
  const [newIsCompleted, setNewIsCompleted] = useState(todo.isCompleted)
  const [newDescription, setNewDescription] = useState(todo.description ?? '')

  const handleTextUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(event.currentTarget.value)
    update(todo.id, { title: event.currentTarget.value })
  }

  const handleIsCompletedUpdate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewIsCompleted(event.currentTarget.checked)
    update(todo.id, { isCompleted: event.currentTarget.checked })
  }

  const handleDescriptionUpdate = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewDescription(event.currentTarget.value)
    update(todo.id, { description: event.currentTarget.value })
  }

  return (
    <Stack gap="xs">
      <Group justify="space-between">
        <Group gap="xs" wrap="nowrap">
          <Checkbox
            checked={newIsCompleted}
            onChange={handleIsCompletedUpdate}
          />
          <TextInput
            size="xl"
            w="100%"
            variant="unstyled"
            placeholder="What would you like to do?"
            radius="lg"
            value={newText}
            onChange={handleTextUpdate}
          />
        </Group>
        <ActionIcon
          onClick={() => remove(todo.id)}
          variant="subtle"
          color="red"
          title="remove todo"
        >
          <TrashIcon />
        </ActionIcon>
      </Group>
      <Textarea
        variant="filled"
        size="lg"
        radius="lg"
        placeholder="Description"
        aria-label="Description"
        autosize
        minRows={4}
        value={newDescription}
        onChange={handleDescriptionUpdate}
      />
    </Stack>
  )
}
