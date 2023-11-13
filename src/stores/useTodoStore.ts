import { v4 as uuid } from 'uuid'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type Todo = {
  id: string
  text: string
  done: boolean
  createdAt: Date | string
}

type TodoStore = {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (text: string) =>
        set({
          todos: [
            ...get().todos,
            { id: uuid(), text, done: false, createdAt: new Date() },
          ],
        }),
      toggleTodo: (id: string) =>
        set({
          todos: get().todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                done: !todo.done,
              }
            }
            return todo
          }),
        }),
      removeTodo: (id: string) =>
        set({
          todos: get().todos.filter(todo => todo.id !== id),
        }),
    }),
    {
      name: 'todo-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: state => ({ todos: state.todos }),
    }
  )
)
