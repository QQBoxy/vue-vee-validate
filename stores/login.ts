import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const loggedIn = ref(false)
  function toggleLogin() {
    loggedIn.value = !loggedIn.value;
  }

  return { loggedIn, toggleLogin }
})
