import Vue from 'vue';

import App from './App';
import router from './router';
import store from './store';

import './styles/index.sass';

import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

import './icons';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
