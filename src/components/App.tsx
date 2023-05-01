import { Component } from 'solid-js';
import style from './App.module.scss';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
export const App: Component = () => {
  return (
    <div class={style.app}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
