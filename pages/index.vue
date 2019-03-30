<template>
  <div>
    <div v-if="$store.state.auth">
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/secret">
          secret page
        </NuxtLink>!
      </p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <div v-else>
      Please
      <div>
        <NuxtLink to="/login">
          login
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/signup">
          signup
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  methods: {
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
    }
  }
}
</script>
