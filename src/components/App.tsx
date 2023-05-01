import { Component } from 'solid-js';
import style from './App.module.scss';
import { Footer } from './Footer';
import { Header } from './Header';
export const App: Component = () => {
  return (
    <div class={style.app}>
      <Header />
      <h1 class={style.title}>hello!</h1>
      <Footer />
    </div>
  );
};
