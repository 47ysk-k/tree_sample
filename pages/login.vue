<template>
  <div class="container">
    <h1>Sign in to access the secret page</h1>
    <div>
      <label for="email">
        <input id="email" type="email" v-model="email" placeholder="email">
      </label>
      <label for="password">
        <input id="password" type="password" v-model="password" placeholder="password">
      </label>
      <button @click="postLogin">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import axios from 'axios'

export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    postLogin() {
      this.$axios.$post('http://localhost:1323/users' ,{ email: this.email, password: this.password })
      .then(res => {
        const auth = { userAccessToken: res.token }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('teams')
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
