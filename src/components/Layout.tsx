import {
  ParentComponent,
  createContext,
  useContext,
  onMount,
  createSignal,
  Show,
} from 'solid-js';
import { Portal } from 'solid-js/web';
import styles from './Layout.module.scss';
import cs from 'classnames/bind';

type ModuleCss = { header: string; content: string; footer: string };
type LayoutComponent = ParentComponent & {
  Header: ParentComponent;
  Footer: ParentComponent;
  Content: ParentComponent;
};

const cx = cs.bind(styles);

const classNames = {
  header: cx('header'),
  content: cx('content'),
  footer: cx('footer'),
};
const ClassNameContext = createContext<ModuleCss>(classNames);

export const Layout: LayoutComponent = (props) => {
  return (
    <ClassNameContext.Provider value={classNames}>
      <div class={cx('layout')}>
        <div class={cx('header')} />
        <div class={cx('content')} />
        <div class={cx('footer')} />
      </div>
      {props.children}
    </ClassNameContext.Provider>
  );
};

const LayoutSlot: ParentComponent<{
  slotName: 'header' | 'content' | 'footer';
}> = (props) => {
  const classNames = useContext(ClassNameContext);
  const [node, setNode] = createSignal<Element | undefined>();
  const selector = `.${classNames[props.slotName]}`;
  onMount(() => {
    const element = document.querySelector(selector) as Element;
    setNode(element);
  });
  return (
    <Show when={node()}>
      <Portal mount={node()} children={props.children} />
    </Show>
  );
};

Layout.Header = (props) => {
  return <LayoutSlot slotName="header">{props.children}</LayoutSlot>;
};
Layout.Content = (props) => {
  return <LayoutSlot slotName="content">{props.children}</LayoutSlot>;
};
Layout.Footer = (props) => {
  return <LayoutSlot slotName="footer">{props.children}</LayoutSlot>;
};
