import type { FC } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { cn } from '@/lib/utils'
import { useTodoStore, type Todo } from '@/stores/useTodoStore'

import { TodoItem } from './TodoItem'

type TodoListType = 'done' | 'todo'

type Props = {
  type: TodoListType
  className?: string
}

const filterTodos = (todos: Todo[], type: TodoListType) => {
  const filteredTodos =
    type === 'todo'
      ? todos.filter(todo => !todo.done)
      : todos.filter(todo => todo.done)

  return filteredTodos.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  )
}

export const TodoList: FC<Props> = ({ type, className }) => {
  const todos = useTodoStore(state => state.todos)
  const filteredTodos = filterTodos(todos, type)
  const [parent, _enableAnimations] = useAutoAnimate()

  if (filteredTodos?.length === 0) return null

  return (
    <div className={cn('mb-8', className)}>
      <h2 className="mb-4 text-3xl font-extralight text-neutral-600">
        {type === 'todo' ? 'To do' : 'Completed'}
      </h2>
      <ul className="flex flex-col gap-y-2" ref={parent}>
        {filteredTodos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}