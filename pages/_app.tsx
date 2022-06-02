import type { AppProps } from 'next/app'

import { SaasProvider } from '@saas-ui/react'
import { Layout } from 'layouts/Layout'

import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SaasProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SaasProvider>
  )
}

export default MyApp
