import { AppProps } from 'next/app'

const App = (appProps: AppProps) => {
  const { Component, pageProps } = appProps
  return <Component {...pageProps} />
}

export default App
