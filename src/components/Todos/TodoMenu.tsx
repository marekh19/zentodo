import { ActionIcon, Group, Menu, Title } from '@mantine/core'
import { EllipsisVertical, TrashIcon } from 'lucide-react'

import { useTodos } from '@/hooks/useTodos'

export const TodoMenu: React.FC = () => {
  const { deleteAll } = useTodos()

  return (
    <Group justify="space-between">
      <Title order={2} size="h3">
        Inbox
      </Title>

      <Menu shadow="sm" width="11.25rem" position="bottom-end">
        <Menu.Target>
          <ActionIcon
            color="gray"
            variant="subtle"
            size="lg"
            radius="xl"
            title="Todo menu"
          >
            <EllipsisVertical />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            onClick={deleteAll}
            leftSection={<TrashIcon style={{ width: '1rem' }} />}
          >
            Delete all todos
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}
