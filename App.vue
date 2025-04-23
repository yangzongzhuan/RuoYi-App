<script setup>
  import { onLaunch } from '@dcloudio/uni-app'
  import { getToken } from '@/utils/auth'
  import { getCurrentInstance } from "vue"

  const { proxy } = getCurrentInstance()

  onLaunch(() => {
    initApp()
  })

  // 初始化应用
  function initApp() {
    // 检查用户登录状态
    //#ifdef H5
    checkLogin()
    //#endif
  }

  function checkLogin() {
    if (!getToken()) {
      proxy.$tab.reLaunch('/pages/login') 
    }
  }
</script>

<script>
  import config from './config'

  export default {
    onLaunch: function() {
      this.globalData.config = config
    }
  }
</script>

<style lang="scss">
  @import '@/static/scss/index.scss'
</style>
