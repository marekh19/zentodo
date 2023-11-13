import { v4 as uuid } from 'uuid'
import { create } from 'zustand'

export type Todo = {
  id: string
  text: string
  done: boolean
  createdAt: Date
}

type TodoStore = {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  removeTodo: (id: string) => void
}

export const useTodoStore = create<TodoStore>()(set => ({
  todos: [],
  addTodo: text =>
    set(state => ({
      todos: [
        ...state.todos,
        {
          id: uuid(),
          text,
          done: false,
          createdAt: new Date(),
        },
      ],
    })),
  toggleTodo: id =>
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          }
        }
        return todo
      }),
    })),
  removeTodo: id =>
    set(state => ({
      todos: state.todos.filter(todo => todo.id !== id),
    })),
}))
