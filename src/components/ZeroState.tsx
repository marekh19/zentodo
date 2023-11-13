import type { FC } from 'react'

import { cn } from '@/lib/utils'
import { useTodoStore } from '@/stores/useTodoStore'
import PencilIcon from '@/assets/icons/pencil-line.svg?react'
import SunsetIcon from '@/assets/icons/sunset.svg?react'

type Props = {
  className?: string
}

export const ZeroState: FC<Props> = ({ className }) => {
  const todos = useTodoStore(state => state.todos)

  const noTodos = todos.length === 0
  const allTodosDone = !noTodos && todos.every(todo => todo.done)

  if (!noTodos && !allTodosDone) return null

  return (
    <div className={cn('w-full', className)}>
      {noTodos && (
        <div className="flex flex-col items-center space-y-1">
          <PencilIcon className="h-24 fill-neutral-300" />
          <p className="text-xl">So empty...</p>
          <p className="italic text-neutral-700">Start by adding some Todos</p>
        </div>
      )}
      {allTodosDone && (
        <div className="flex flex-col items-center space-y-1">
          <SunsetIcon className="h-24 fill-neutral-300" />
          <p className="text-xl">All done!</p>
          <p className="italic text-neutral-700">
            Embrace the serenity of a clear mind.
          </p>
        </div>
      )}
    </div>
  )
}
