import Vue from 'vue';
import App from './App.vue';
// import router from './router'
// import store from './store'
import store from './store/index';
import router from './router/index';
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
