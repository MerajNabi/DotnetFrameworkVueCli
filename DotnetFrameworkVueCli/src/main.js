import Vue from 'vue'
Vue.config.productionTip = false

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Button from "primevue/button";

Vue.component('users-grid', require('./components/UsersGrid.vue').default);
Vue.component('user-card', require('./components/UserCard.vue').default);
Vue.component('users-card-grid', require('./components/UserCardGrid.vue').default);
Vue.component("Button", Button);
window.Vue = Vue;
