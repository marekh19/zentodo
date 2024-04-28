import type { FC } from 'react'
import { Checkbox, Drawer, Group, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { type Todo } from '@/stores/useTodoStore'
import { useTodos } from '@/hooks/useTodos'

import { TodoDetail } from './TodoDetail'

type Props = {
  todo: Todo
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const { setIsCompleted } = useTodos()
  const [isOpen, { open, close }] = useDisclosure()

  return (
    <>
      <Drawer
        opened={isOpen}
        onClose={close}
        position="bottom"
        size="xs"
        withCloseButton={false}
      >
        <TodoDetail todo={todo} />
      </Drawer>

      <Group>
        <Checkbox
          variant="filled"
          checked={todo.isCompleted}
          onChange={(event) =>
            setIsCompleted(todo.id, event.currentTarget.checked)
          }
        />
        <UnstyledButton
          style={{
            textDecoration: todo.isCompleted ? 'line-through' : '',
            opacity: todo.isCompleted ? 0.5 : 1,
          }}
          onClick={open}
        >
          {todo.title}
        </UnstyledButton>
      </Group>
    </>
  )
}
