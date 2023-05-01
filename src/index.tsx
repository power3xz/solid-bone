import { render } from 'solid-js/web';
import App from './components/App';
import './reset.scss';

render(() => <App />, document.querySelector('#root') as HTMLElement);
