import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './common/style.scss';

createApp(App).use(router).mount('#root');
