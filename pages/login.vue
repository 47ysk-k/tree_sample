<template>
  <div class="container">
    <h1>ログインページ</h1>
    <div>
      <label for="email">
        <input id="email" type="email" v-model="email" placeholder="email">
      </label>
      <label for="password">
        <input id="password" type="password" v-model="password" placeholder="password">
      </label>
      <button @click="postLogin">
        ログインする
      </button>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notUserAuthenticated',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    postLogin() {
      this.$axios.$post('http://localhost:1323/login', { email: this.email, password: this.password })
      .then(res => {
        const auth = { userAccessToken: res.token }
        this.$store.commit('user/setAuth', auth)
        Cookie.set('auth', auth)
        this.$router.push('teams')
      })
      .catch(e => {
        // ステータスコード見て処理書く
      })
    }
  }
}
</script>
