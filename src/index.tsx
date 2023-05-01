import { render } from 'solid-js/web';
import { App } from './components/App';
import './reset.css';
import './global.css';

render(() => <App />, document.querySelector('#root') as HTMLElement);
