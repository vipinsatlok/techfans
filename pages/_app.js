import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <div className='flex bg-blue-900 flex-col h-screen'>
      <header>
        <Header />
      </header>
      <main className='flex-1 p-2 px-5'>
        <Component {...pageProps} />
      </main>
      <footer className='px-5'>
        <Footer />
      </footer>
    </div>
  )
}
