import r2wc from '@r2wc/react-to-web-component';
import { App } from './App';

const WebComponentWidget = r2wc(App, {
    props: {
        widgetName: 'string',
    },
});

customElements.define('platform-widget', WebComponentWidget);
