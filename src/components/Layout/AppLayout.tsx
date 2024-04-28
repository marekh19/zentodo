import { AppShell, Group, Title } from '@mantine/core'

import Logo from '@/assets/zentodo.svg?react'

import { Providers } from './Providers'
import { ToggleTheme } from './ToggleTheme'

type Props = {
  children: React.ReactNode
}
export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Providers>
      <AppShell header={{ height: 64 }} withBorder={false}>
        <AppShell.Header mx="auto" maw="64rem" py="xs" px="md">
          <Group h="100%" justify="space-between">
            <Group gap="xs" h="100%">
              <Group
                bg="gray.2"
                p="0.4rem"
                h="100%"
                style={{ borderRadius: '0.6rem' }}
                justify="center"
                align="center"
              >
                <Logo style={{ height: '100%' }} />
              </Group>
              <Title>Zentodo</Title>
            </Group>
            <ToggleTheme />
          </Group>
        </AppShell.Header>
        <AppShell.Main pos="relative" mx="auto" maw="64rem" px="md" pb="md">
          {children}
        </AppShell.Main>
      </AppShell>
    </Providers>
  )
}
