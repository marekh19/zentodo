import '@mantine/core/styles.css'

import { createTheme, MantineProvider } from '@mantine/core'

type Props = {
  children: React.ReactNode
}

const theme = createTheme({
  primaryColor: 'green',
})

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      {children}
    </MantineProvider>
  )
}
