import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { createTheme, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

type Props = {
  children: React.ReactNode
}

const theme = createTheme({
  primaryColor: 'green',
})

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Notifications />
      {children}
    </MantineProvider>
  )
}
