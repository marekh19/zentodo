import { AddTodo } from '@/components/AddTodo'
import { Header } from '@/components/Header'

import { TodoList } from './components/TodoList'

function App() {
  return (
    <main className="relative min-h-screen p-6">
      <Header className="mb-10" />
      <AddTodo className="mb-10" />
      <TodoList type="todo" />
      <TodoList type="done" />
    </main>
  )
}

export default App
