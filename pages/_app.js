import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex bg-gray-900 flex-col min-h-screen">
    <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5828945217071181"
       crossorigin="anonymous"></script>
    </Head>
      <header className="min-h-max bg-blue-500 flex items-center py-5 px-5">
        <Header />
      </header>
      <main className="flex-1 flex justify-center p-5">
        <Component {...pageProps} />
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
