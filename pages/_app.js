import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <div className='flex flex-col h-screen'>
      <nav className='h-16 p-2 px-5'>nav</nav>
      <main className='flex-1 p-2 px-5'>
        <Component {...pageProps} />
      </main>
      <footer className='px-5'>footer</footer>
    </div>
  )
}
