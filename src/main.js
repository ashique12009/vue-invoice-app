import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileInvoiceDollar, faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFileInvoiceDollar, faArrowDown, faPlus);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');