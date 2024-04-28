import { Card, Stack, Text, Title } from '@mantine/core'

import { useTodos } from '@/hooks/useTodos'
import AddNotes from '@/assets/add-notes.svg?react'
import WalkingOutside from '@/assets/walking-outside.svg?react'

export const ZeroState: React.FC = () => {
  const { isAllCompleted, hasTodos } = useTodos()

  return (
    <>
      {!hasTodos && (
        <Card shadow="sm" padding="lg" radius="md">
          <Stack justify="center">
            <AddNotes style={{ height: '8rem' }} />
            <Title order={2} size="h3" ta="center">
              So empty...
            </Title>
            <Text ta="center">Start by adding some Todos</Text>
          </Stack>
        </Card>
      )}
      {isAllCompleted && (
        <Card shadow="sm" padding="lg" radius="md">
          <Stack justify="center">
            <WalkingOutside style={{ height: '8rem' }} />
            <Title order={2} size="h3" ta="center">
              All done!
            </Title>
            <Text ta="center">Embrace the serenity of a clear mind.</Text>
          </Stack>
        </Card>
      )}
    </>
  )
}
