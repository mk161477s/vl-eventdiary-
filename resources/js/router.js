import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import EventList from './pages/EventList.vue'
import Login from './pages/Login.vue'

import store from './store'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    component: EventList
  },
  {
    path: '/login',
    component: Login,
    beforeEnter (to, from, next) {
      // ログイン状態をチェック
      if (store.getters['auth/check']) {
        // ログインしていればトップページに切り替え
        next('/')
      } else {
        // ログインしていなければログインページを表示
        next()
      }
    }
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router