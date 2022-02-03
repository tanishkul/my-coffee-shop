import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Component {...pageProps} />
    <footer>
      <p>© 2022 Tanish</p>
    </footer>
  </>);
}

export default MyApp
