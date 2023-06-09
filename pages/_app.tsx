import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
