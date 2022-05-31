import { useContext } from 'react';
import Layout from '../layout'
import ThemeProvider from '../contexts/useTheme';

export default function MyApp({ Component, pageProps }) {
  return <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}
