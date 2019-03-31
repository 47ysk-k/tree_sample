const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  current_team: null
})

export const mutations = {
  setCurrentTeam(state, current_team) {
    state.current_team = current_team
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // let current_team = null;
    // if (req.headers.cookie) {
    //   const parsed = cookieparser.parse(req.headers.cookie);
    //   try {
    //     current_team = JSON.parse(parsed.auth)
    //   } catch (err) {
    //     // No valid cookie found
    //   }
    // }
    // commit('setCurrentTeam', current_team)
  }
}

