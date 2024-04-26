import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useLoginStore } from '../stores/login'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';

import zh_TW from './i18n/zh_TW.json';
// import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

const pinia = createPinia();

const app = createApp(App)
app.use(pinia)

const userStore = useLoginStore();

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});
defineRule('days', (value, [day]) => {
  if (!value) {
    return true;
  }
  return parseInt(value, 10) < parseInt(day, 10);
});
defineRule('login', () => {
  return userStore.loggedIn;
});

configure({
  generateMessage: localize({
    zh_TW,
  }),
  validateOnInput: true,
});

setLocale('zh_TW');

app.use(router)

app.component('VForm', Form);
app.component('VField', Field);
app.component('VErrorMessage', ErrorMessage);

app.mount('#app')
