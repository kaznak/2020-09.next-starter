import { AppProps } from 'next/app'

import theme from '../lib/theme'
import { ChakraProvider } from '@chakra-ui/core'

const App = (appProps: AppProps) => {
  const { Component, pageProps } = appProps
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
