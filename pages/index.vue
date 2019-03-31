<template>
  <div>
    <div v-if="$store.state.auth">
      <p>
        You are authenticated. You can see the
        <NuxtLink to="/notes">
          note page
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

export default {
  methods: {
    logout() {
      this.$store.commit('setAuth', null)
    }
  }
}
</script>
