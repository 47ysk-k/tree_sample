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
      this.$axios.$post('http://localhost:1323/login' ,{ email: this.email, password: this.password })
      .then(res => {
        const auth = { userAccessToken: res.token }
        this.$store.commit('setAuth', auth)
        this.$router.push('teams')
      })
      .catch(e => {
        // ステータスコード見て処理書く
      })
    }
  }
}
</script>
