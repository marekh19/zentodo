import { type FC } from 'react'
import { ActionIcon, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Plus } from 'lucide-react'

import { AddTodoForm } from './AddTodoForm'

export const AddTodoDrawer: FC = () => {
  const [isOpen, { open, close }] = useDisclosure()

  return (
    <>
      <Drawer
        opened={isOpen}
        onClose={close}
        position="bottom"
        size="xs"
        withCloseButton={false}
      >
        <AddTodoForm closeDrawer={close} />
      </Drawer>

      <div
        style={{
          position: 'fixed',
          bottom: '3rem',
          right: '1rem',
          zIndex: 10,
        }}
      >
        <ActionIcon
          size="3rem"
          radius="100%"
          title="Add todo"
          onClick={open}
          p="0.5rem"
        >
          <Plus size="100%" />
        </ActionIcon>
      </div>
    </>
  )
}
