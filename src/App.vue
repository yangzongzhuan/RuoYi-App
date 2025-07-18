<script setup>
  import config from '@/config'
  import { getToken } from '@/utils/auth'
  import { useConfigStore } from '@/store'
  import { getCurrentInstance } from "vue"
  import { onLaunch } from '@dcloudio/uni-app'

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
    useConfigStore().setConfig(config)
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
