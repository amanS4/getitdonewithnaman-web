import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Get It Done With Naman</title>
        <meta
          key="title"
          name="keywords"
          content="Fitness, nutrition and diet plans"
        />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
