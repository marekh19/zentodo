import {
  ActionIcon,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { Moon, Sun } from 'lucide-react'

export const ToggleTheme: React.FC = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  const toggleTheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Group justify="center">
      <ActionIcon
        onClick={toggleTheme}
        variant="subtle"
        size="sm"
        title="Toggle theme"
        color={computedColorScheme === 'light' ? 'blue' : 'yellow'}
      >
        {computedColorScheme === 'light' && <Moon />}
        {computedColorScheme === 'dark' && <Sun />}
      </ActionIcon>
    </Group>
  )
}
