import { render } from 'solid-js/web';
import App from './components/App';
import './reset.scss';
import './global.scss';

render(() => <App />, document.querySelector('#root') as HTMLElement);
