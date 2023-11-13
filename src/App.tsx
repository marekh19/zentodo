import { AddTodo } from '@/components/AddTodo'
import { Header } from '@/components/Header'

import { TodoList } from './components/TodoList'
import { ZeroState } from './components/ZeroState'

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl p-6">
      <Header className="mb-10" />
      <AddTodo className="mb-10" />
      <ZeroState className="mb-10" />
      <TodoList type="todo" />
      <TodoList type="done" />
    </main>
  )
}

export default App
