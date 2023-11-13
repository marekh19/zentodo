import { AddTodo } from '@/components/AddTodo'
import { Header } from '@/components/Header'

import { TodoList } from './components/TodoList'
import { ZeroState } from './components/ZeroState'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl space-y-10 p-6">
      <Header />
      <AddTodo />
      <ZeroState />
      <TodoList type="todo" />
      <TodoList type="done" />
    </main>
  )
}

export default App
