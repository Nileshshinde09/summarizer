
import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/navigation'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='container bg-sky-200 no-scrollbar overflow-hidden'>
        <Navbar/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
