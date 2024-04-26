<script setup>
import { useForm } from 'vee-validate';
import { useLoginStore } from '../../stores/login';

const userStore = useLoginStore();

const { values, defineField } = useForm();
const [email, emailAttrs] = defineField('email');
const [name, nameAttrs] = defineField('name');
const [day, dayAttrs] = defineField('day');
const [agree, agreeAttrs] = defineField('agree');
const [fruit, fruitAttrs] = defineField('fruit');
const [drink, drinkAttrs] = defineField('drink');

const handleLogin = () => {
  userStore.toggleLogin();
};

const handleSubmit = () => {
  console.log("values", values);
};

</script>

<template>
  <div>
    Login test <button @click="handleLogin">{{ userStore.loggedIn ? 'Logout' : 'Login' }}</button>
  </div>
  <VForm @submit="handleSubmit" v-slot="{ errors }">
    <pre>errors: {{ errors }}</pre>
    <div>
      <label for="email">Email</label>
      <VField type="text" name="email" v-model="email" v-bind="emailAttrs" rules="login|email|required"></VField>
      <VErrorMessage name="email"></VErrorMessage>
    </div>
    <div>
      <label for="name">name</label>
      <VField type="text" name="name" v-model="name" v-bind="nameAttrs" rules="login|required"></VField>
      <VErrorMessage name="name"></VErrorMessage>
    </div>
    <div>
      <label for="day">day</label>
      <VField type="text" name="day" v-model="day" v-bind="dayAttrs" rules="login|days:10|required"></VField>
      <VErrorMessage name="day"></VErrorMessage>
    </div>
    <div>
      <label for="agree">agree</label>
      <VField name="agree" type="checkbox" v-model="agree" v-bind="agreeAttrs" :value="true" rules="login|required">
      </VField>
      <VErrorMessage name="agree"></VErrorMessage>
    </div>
    <div>
      <label for="fruit">fruit</label>
      <VField name="fruit" type="checkbox" v-model="fruit" v-bind="fruitAttrs" value="apple" rules="login|required">
      </VField>
      Apple
      <VField name="fruit" type="checkbox" v-model="fruit" v-bind="fruitAttrs" value="banana" rules="login|required">
      </VField>
      Banana
      <VErrorMessage name="fruit"></VErrorMessage>
    </div>
    <div>
      <label for="drink">drink</label>
      <VField name="drink" type="radio" v-model="drink" v-bind="drinkAttrs" value="none" rules="login|required" /> None
      <VField name="drink" type="radio" v-model="drink" v-bind="drinkAttrs" value="tea" rules="login|required" /> Tea
      <VField name="drink" type="radio" v-model="drink" v-bind="drinkAttrs" value="coffee" rules="login|required" />
      Coffee
      <VErrorMessage name="drink"></VErrorMessage>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </VForm>
</template>
