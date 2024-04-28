import type { FC } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Card, Stack, Title } from '@mantine/core'

import { useTodos, type TodoListType } from '@/hooks/useTodos'

import { TodoItem } from './TodoItem'

type Props = {
  type: TodoListType
}

export const TodoList: FC<Props> = ({ type }) => {
  const { getFilteredTodos } = useTodos()
  const [parent, _enableAnimations] = useAutoAnimate()

  if (getFilteredTodos(type)?.length === 0) return null

  return (
    <Card shadow="sm" padding="lg" radius="md">
      {type === 'done' && (
        <Title
          order={3}
          size="h6"
          style={{ textTransform: 'uppercase', fontWeight: 500 }}
          mb="xs"
        >
          Completed
        </Title>
      )}
      <Stack ref={parent}>
        {getFilteredTodos(type).map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </Stack>
    </Card>
  )
}
