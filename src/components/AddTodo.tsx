import { useRef, type FC } from 'react'

import { cn } from '@/lib/utils'
import { useTodoStore } from '@/stores/useTodoStore'

type Props = {
  className?: string
}

export const AddTodo: FC<Props> = ({ className }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const addTodo = useTodoStore(state => state.addTodo)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const value = inputRef.current?.value
    if (value) addTodo(value)
    if (inputRef.current?.value) inputRef.current.value = ''
  }

  return (
    <form onSubmit={onSubmit} className={cn('flex flex-col', className)}>
      <input
        type="text"
        className="h-12 w-full rounded-lg border border-neutral-300 bg-white px-2 text-center text-lg transition-colors duration-200 ease-in-out placeholder:text-neutral-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-300"
        placeholder="Water indoor plants"
        ref={inputRef}
      />
      <button
        type="submit"
        className="mx-auto mt-4 inline-flex items-center rounded-lg bg-green-300 px-5 py-2.5"
      >
        Add
      </button>
    </form>
  )
}
