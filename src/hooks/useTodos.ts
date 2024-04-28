import { useMemo } from 'react'

import { useTodoStore, type Todo } from '@/stores/useTodoStore'

export type TodoListType = 'done' | 'todo'

export const useTodos = () => {
  const todos = useTodoStore((state) => state.todos)
  const add = useTodoStore((state) => state.addTodo)
  const setIsCompleted = useTodoStore((state) => state.setIsCompleted)
  const update = useTodoStore((state) => state.updateTodo)
  const deleteAll = useTodoStore((state) => state.clearTodos)
  const remove = useTodoStore((state) => state.removeTodo)

  const hasTodos = !!todos.length
  const isAllCompleted = todos.every((todo) => todo.isCompleted) && hasTodos

  const sortByCreatedAt = (todos: Todo[]) => {
    return [...todos].sort((a, b) => {
      const dateA =
        typeof a.createdAt === 'string' ? new Date(a.createdAt) : a.createdAt
      const dateB =
        typeof b.createdAt === 'string' ? new Date(b.createdAt) : b.createdAt
      return dateB.getTime() - dateA.getTime()
    })
  }

  const getFilteredTodos = useMemo(() => {
    return (type: TodoListType) => {
      const filteredTodos =
        type === 'todo'
          ? todos.filter((todo) => !todo.isCompleted)
          : todos.filter((todo) => todo.isCompleted)

      return sortByCreatedAt(filteredTodos)
    }
  }, [todos])

  return {
    todos,
    getFilteredTodos,
    add,
    setIsCompleted,
    update,
    hasTodos,
    isAllCompleted,
    deleteAll,
    remove,
  }
}
