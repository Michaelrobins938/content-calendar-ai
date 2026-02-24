import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e5f0ff',
      100: '#b8d4ff',
      200: '#8ab8ff',
      300: '#5c9cff',
      400: '#2e80ff',
      500: '#0064ff',
      600: '#0050cc',
      700: '#003c99',
      800: '#002866',
      900: '#001433',
    },
  },
  fonts: {
    heading: 'Inter, -apple-system, system-ui, sans-serif',
    body: 'Inter, -apple-system, system-ui, sans-serif',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp