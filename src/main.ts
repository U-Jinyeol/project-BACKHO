import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { loadFonts } from './plugins/webfontloader';
import './index.css';
import '@/assets/scss/common.scss';
import '@/assets/scss/reset.scss';

loadFonts();

createApp(App).use(router).mount('#app');
