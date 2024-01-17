import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Running Made Simple</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
