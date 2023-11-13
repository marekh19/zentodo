import type { FC } from 'react'
import { useTodoStore, type Todo } from '@/stores/useTodoStore'

import { cn } from '@/lib/utils'

type Props = {
  todo: Todo
  className?: string
}

export const TodoItem: FC<Props> = ({ todo, className }) => {
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  return (
    <li
      className={cn(
        'inline-flex h-10 items-center px-2 text-lg',
        { 'rounded-lg bg-white font-medium': !todo.done },
        { 'text-neutral-500 line-through': todo.done },
        className
      )}
      onClick={() => toggleTodo(todo.id)}
    >
      <span className="line-clamp-1">{todo.text}</span>
    </li>
  )
}
