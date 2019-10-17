export const state = () => ({
  email: ''
})

export const mutations = {
  updateEmail(state, email) {
    state.email = email
  }
}
