import { Component } from 'solid-js';

import styles from './Header.module.scss';
import { Logo } from './Logo';

export const Header: Component = () => {
  return (
    <header class={styles.header}>
      <Logo />
    </header>
  );
};
