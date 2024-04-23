<script setup>
import { useForm } from 'vee-validate';

const { values, defineField } = useForm();
const [email, emailAttrs] = defineField('email');
const [name, nameAttrs] = defineField('name');
const [day, dayAttrs] = defineField('day');
const [agree, agreeAttrs] = defineField('agree');

const handleSubmit = () => {
  console.log("values", values);
};

</script>

<template>
  <VForm @submit="handleSubmit">
    <div>
      <label for="email">Email</label>
      <VField type="text" name="email" v-model="email" v-bind="emailAttrs" rules="email|required"></VField>
      <VErrorMessage name="email"></VErrorMessage>
    </div>
    <div>
      <label for="name">name</label>
      <VField type="text" name="name" v-model="name" v-bind="nameAttrs" rules="required"></VField>
      <VErrorMessage name="name"></VErrorMessage>
    </div>
    <div>
      <label for="day">day</label>
      <VField type="text" name="day" v-model="day" v-bind="dayAttrs" rules="days:10|required"></VField>
      <VErrorMessage name="day"></VErrorMessage>
    </div>
    <div>
      <label for="agree">agree</label>
      <VField name="agree" type="checkbox" v-model="agree" v-bind="agreeAttrs" :value="true" rules="required" />
      <VErrorMessage name="agree"></VErrorMessage>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </VForm>
</template>
