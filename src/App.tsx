import { Stack } from '@mantine/core'

import { AppLayout } from './components/Layout/AppLayout'
import { AddTodoDrawer } from './components/Todos/AddTodoDrawer.tsx'
import { TodoList } from './components/Todos/TodoList.tsx'
import { TodoMenu } from './components/Todos/TodoMenu.tsx'
import { ZeroState } from './components/Todos/ZeroState.tsx'

function App() {
  return (
    <AppLayout>
      <TodoMenu />
      <AddTodoDrawer />
      <Stack mt="md">
        <ZeroState />
        <TodoList type="todo" />
        <TodoList type="done" />
      </Stack>
    </AppLayout>
  )
}

export default App
