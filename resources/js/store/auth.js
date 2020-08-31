const state = {
  user: null
}

const getters = {
  // ログインチェック（!!で確実に真偽値を通す）
  check: state => !! state.user,
  // ログインユーザー
  username: state => state.user ? state.user.name : ''
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

const actions = {
  // 会員登録
  async register (context, data) {
    const response = await axios.post('/api/register', data)
    context.commit('setUser', response.data)
  },
  // ログイン
  async login (context, data) {
    const response = await axios.post('/api/login', data)
    context.commit('setUser', response.data)
  },
  // ログアウト
  async logout (context) {
    const response = await axios.post('/api/logout')
    context.commit('setUser', null)
  },
  // 現在のユーザー
  async currentUser (context) {
    const response = await axios.get('/api/user')
    const user = response.data || null
    context.commit('setUser', user)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}