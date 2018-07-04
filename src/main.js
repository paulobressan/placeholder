import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate, {Validator} from 'vee-validate';
import routes from './routes';
import pt_BR from './pt_BR';

//jquery dependencia boostrap
import 'jquery/dist/jquery.js';
//popper dependencia boostrap
import 'popper.js';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);

Vue.http.options.root = 'https://jsonplaceholder.typicode.com/';
Validator.localize('pt_BR', pt_BR);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
