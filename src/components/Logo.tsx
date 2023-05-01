import { Component, createSignal } from 'solid-js';
import cs from 'classnames/bind';
import styles from './Logo.module.scss';
const cx = cs.bind(styles);

export const Logo: Component = () => {
  const [isOn, setIsOn] = createSignal(false);
  return (
    <div
      class={cx('logo', { isOn: isOn() })}
      onClick={() => setIsOn(!isOn())}
    ></div>
  );
};
