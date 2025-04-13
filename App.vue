<script setup>
  import { onLaunch } from '@dcloudio/uni-app'
  import config from './config'
  import store from '@/store'
  import { getToken } from '@/utils/auth'
  import { getCurrentInstance } from "vue"

  const { proxy } = getCurrentInstance()

  onLaunch(() => {
    initApp()
  })

  // 初始化应用
  function initApp() {
    // 初始化应用配置
    initConfig()
    // 检查用户登录状态
    //#ifdef H5
    checkLogin()
    //#endif
  }

  function initConfig() {
    getApp().globalData.config = config
  }

  function checkLogin() {
    if (!getToken()) {
      proxy.$tab.reLaunch('/pages/login') 
    }
  }
</script>

<style lang="scss">
  @import '@/static/scss/index.scss'
</style>
