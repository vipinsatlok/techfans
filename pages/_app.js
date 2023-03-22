import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="flex-1 flex justify-center p-5">
      <Component {...pageProps} />
    </main>
  );
}
