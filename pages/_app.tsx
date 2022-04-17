import React, { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';

import '../styles/index.css';
import 'antd/dist/antd.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import { FuegoProvider } from 'swr-firestore-v9';
import { fuego } from '../firebase';
import { AuthWrapper } from '../components/Auth';

const defaultGetLayout = (page: ReactElement) => (
  <Layout title="My Application">{page}</Layout>
);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({
  Component,
  pageProps,
  getTitle = () => 'My Application',
}: AppProps & {
  Component: NextPageWithLayout;
  getTitle: () => string;
}) {
  const getLayout = Component.getLayout || defaultGetLayout;

  return (
    <FuegoProvider fuego={fuego}>
      <Head>
        <title>{getTitle()}</title>
      </Head>
      <AuthWrapper>{getLayout(<Component {...pageProps} />)}</AuthWrapper>
    </FuegoProvider>
  );
}

export default MyApp;
