import Vue from 'vue';
import App from './components/App.vue';
import Home from './components/Home.vue';
// import SecretQuote from './components/SecretQuote.vue';
// import Signup from './components/Signup.vue';
// import Login from './components/Login.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//just need bootstrap.css
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);
Vue.use(VueResource);

export const router = new VueRouter();

router.map({
  '/home': {
    component: Home,
  },
  //
  // '/secretQuote': {
  //   component: SecretQuote,
  // },
  //
  // '/login': {
  //   component: Login,
  // },
  //
  // '/signup': {
  //   component: Signup,
  // },
});

router.redirect({
  '*': '/home',
});

router.start(App, '#app');
