import { createSSRApp } from 'vue'
import App from './App'
import store from './store' // store
import { install } from './plugins' // plugins
import './permission' // permission

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  install(app)
  return {
    app
  }
}
