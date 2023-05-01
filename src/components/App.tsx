import { Component } from 'solid-js';
import style from './App.module.scss';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
export const App: Component = () => {
  return (
    <div class={style.app}>
      <div class={style.header}>
        <Header />
      </div>

      <div class={style.content}>
        <Content />
      </div>

      <div class={style.footer}>
        <Footer />
      </div>
    </div>
  );
};
