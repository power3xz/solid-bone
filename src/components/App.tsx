import { Component } from 'solid-js';

import styles from './App.module.scss';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import { Layout } from './Layout';

export const App: Component = () => {
  return (
    <div class={styles.app}>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Content />
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </div>
  );
};
