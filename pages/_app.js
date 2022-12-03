import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import './global.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
