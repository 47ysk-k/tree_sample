<template>
  <div class="container">
    <h1> /teams/index </h1>
    <div>
      <label for="email">
        <input id="email" type="email" v-model="email" placeholder="email">
      </label>
      <label for="name">
        <input id="name" type="text" v-model="name" placeholder="team name">
      </label>
      <!-- <button @click="postTeamlogin">
        login
      </button> -->
      <button @click="postTeamSignup">
        signup
      </button>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
  // team側でもauth設定するかもなので一旦コメントアウト
  // middleware: 'notAuthenticated',
  data() {
    return {
      email: '',
      name: '',
    }
  },
  methods: {
    // api側が未完成
    // postTeamlogin() {
    //   this.$axios.$post('http://localhost:1323/users' ,{ email: this.email, password: this.password })
    //   .then(res => {
    //     const auth = { teamAccessToken: res.token }
    //     this.$store.commit('setAuth', auth) // mutating to store for client rendering
    //     Cookie.set('auth', auth) // saving token in cookie for server rendering
    //     this.$router.push('/teams')
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
    // },
    postTeamSignup() {
      this.$axios.$post('http://localhost:1323/createTeam' ,{ email: this.email, name: this.name })
      .then(res => {
        const auth = { teamAccessToken: res.token }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/teams')
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
