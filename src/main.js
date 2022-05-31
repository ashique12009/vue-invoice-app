import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileInvoiceDollar, faArrowDown, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import createStore from './store';

library.add(faFileInvoiceDollar, faArrowDown, faPlus, faTrash);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(createStore).mount('#app');