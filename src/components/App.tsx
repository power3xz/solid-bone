import { Component } from 'solid-js';

import styles from './App.module.scss';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

export const App: Component = () => {
  return (
    <div class={styles.app}>
      <div class={styles.header}>
        <Header />
      </div>

      <div class={styles.content}>
        <Content />
      </div>

      <div class={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
