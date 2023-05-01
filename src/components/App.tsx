import { Component } from 'solid-js';
import Pages from '../pages';

import styles from './App.module.scss';

export const App: Component = () => {
  return (
    <div class={styles.app}>
      <Pages />
    </div>
  );
};
