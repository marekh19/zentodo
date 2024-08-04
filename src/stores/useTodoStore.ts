import { nanoid } from 'nanoid'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { storage } from '@/lib/storage'

export type Todo = {
  id: string
  title: string
  description: string | null
  createdAt: Date | string
  isCompleted: boolean
  completedAt: Date | string | null
}

type UpdateTodo = Partial<Pick<Todo, 'isCompleted' | 'title' | 'description'>>

type TodoStore = {
  todos: Todo[]
  addTodo: (text: Todo['title']) => void
  setIsCompleted: (id: Todo['id'], isCompleted: Todo['isCompleted']) => void
  removeTodo: (id: Todo['id']) => void
  clearTodos: () => void
  updateTodo: (id: Todo['id'], todo: UpdateTodo) => void
}

export const useTodoStore = create<TodoStore>()(
  persist<TodoStore>(
    (set) => ({
      todos: [],

      addTodo: (text) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: nanoid(),
              title: text,
              description: null,
              isCompleted: false,
              createdAt: new Date(),
              completedAt: null,
            },
          ],
        })),

      setIsCompleted: (id, isCompleted) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  isCompleted: isCompleted,
                  completedAt: isCompleted ? new Date() : null,
                }
              : todo
          ),
        })),

      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      clearTodos: () => set({ todos: [] }),

      updateTodo: (id, { isCompleted, title, description }) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  title: title ?? todo.title,
                  description: description ?? todo.description,
                  isCompleted: isCompleted ?? todo.isCompleted,
                  completedAt:
                    typeof isCompleted === 'undefined'
                      ? todo.completedAt
                      : isCompleted
                        ? new Date()
                        : null,
                }
              : todo
          ),
        })),
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => storage),
    }
  )
)
