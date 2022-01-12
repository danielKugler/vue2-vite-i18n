import Vue from 'vue';
import App from './app/App.vue';
import router from './router';
import { i18n } from './i18n';
import './index.scss'

new Vue({
    router,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
