import { AppProps } from 'next/app'
import { SSRProvider, Provider, defaultTheme } from '@adobe/react-spectrum'

import 'normalize.css'

const App = (appProps: AppProps) => {
  const { Component, pageProps } = appProps
  const locale = 'ja-JP'
  return (
    <SSRProvider>
      <Provider
        theme={defaultTheme}
        locale={locale}
        minWidth="100vw"
        minHeight="100vh"
        position="absolute"
        top={0}
      >
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  )
}

export default App
