import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

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
  persist(
    (set) => ({
      todos: [],

      addTodo: (text: Todo['title']) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: crypto.randomUUID(),
              title: text,
              description: null,
              isCompleted: false,
              createdAt: new Date(),
              completedAt: null,
            },
          ],
        })),

      setIsCompleted: (id: string, isCompleted: boolean) =>
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

      removeTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      clearTodos: () => set({ todos: [] }),

      updateTodo: (
        id: Todo['id'],
        { isCompleted, title, description }: UpdateTodo
      ) =>
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
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ todos: state.todos }),
    }
  )
)
