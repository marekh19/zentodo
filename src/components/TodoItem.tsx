import type { FC } from 'react'

import { cn } from '@/lib/utils'
import { useTodoStore, type Todo } from '@/stores/useTodoStore'
import TrashIcon from '@/assets/icons/trash.svg?react'

type Props = {
  todo: Todo
  className?: string
}

export const TodoItem: FC<Props> = ({ todo, className }) => {
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const deleteTodo = useTodoStore(state => state.removeTodo)

  return (
    <li
      className={cn(
        'inline-flex h-10 items-center justify-between px-2 text-lg font-light',
        { 'rounded-lg bg-white': !todo.done },
        { 'text-neutral-500 line-through': todo.done },
        className
      )}
      onClick={() => toggleTodo(todo.id)}
    >
      <span className="line-clamp-1">{todo.text}</span>
      <button
        aria-label="Delete Todo"
        onClick={() => deleteTodo(todo.id)}
        className="text-neutral-500"
      >
        <TrashIcon className="h-5 w-5 fill-current" />
      </button>
    </li>
  )
}
