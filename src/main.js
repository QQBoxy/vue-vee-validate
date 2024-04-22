import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';

import zh_TW from './i18n/zh_TW.json';
// import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});
defineRule('days', (value, [day]) => {
  if (!value) {
    return true;
  }
  return parseInt(value, 10) < parseInt(day, 10);
});

configure({
  generateMessage: localize({
    zh_TW,
  }),
  validateOnInput: true,
});

setLocale('zh_TW');

const app = createApp(App)

app.use(router)

app.component('VForm', Form);
app.component('VField', Field);
app.component('VErrorMessage', ErrorMessage);

app.mount('#app')
