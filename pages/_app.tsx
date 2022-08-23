import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/globals';
import { store } from '../store/store';
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
