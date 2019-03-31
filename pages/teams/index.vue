<template>
  <div class="container">
    <h1> /teams/index </h1>
    <div>
      <label for="name">
        <input id="name" type="text" v-model="name" placeholder="name">
      </label>
      <label for="member_name">
        <input id="member_name" type="text" v-model="member_name" placeholder="member_name">
      </label>
<!--      <button @click="postTeamlogin">-->
<!--        login-->
<!--      </button>-->
      <button @click="postTeamSignup">
        signup
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // team側でもauth設定するかもなので一旦コメントアウト
  // middleware: 'notAuthenticated',
  data() {
    return {
      name: '',
      member_name: '',
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
      const config = {
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.auth.userAccessToken,
          'Content-Type': 'application/json'
        }
      }
      this.$axios.$post('http://localhost:1323/teams', { name: this.name, member_name: this.member_name }, config)
      .then(res => {
        const auth = { current_team: res }
        this.$store.commit('setAuth', auth)
        this.$router.push('/teams')
      })
      .catch(e => {
        // ステータスコード見て処理書く
      })
    }
  }
}
</script>
