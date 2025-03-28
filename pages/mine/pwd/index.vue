<template>
  <view class="pwd-retrieve-container">
    <uni-forms ref="form" :value="user" labelWidth="80px">
      <uni-forms-item name="oldPassword" label="旧密码">
        <uni-easyinput type="password" v-model="user.oldPassword" placeholder="请输入旧密码" />
      </uni-forms-item>
      <uni-forms-item name="newPassword" label="新密码">
        <uni-easyinput type="password" v-model="user.newPassword" placeholder="请输入新密码" />
      </uni-forms-item>
      <uni-forms-item name="confirmPassword" label="确认密码">
        <uni-easyinput type="password" v-model="user.confirmPassword" placeholder="请确认新密码" />
      </uni-forms-item>
      <button type="primary" @click="submit">提交</button>
    </uni-forms>
  </view>
</template>

<script setup>
  import { updateUserPwd } from "@/api/system/user"
  import { ref, reactive , getCurrentInstance } from "vue"
  import { onReady } from  "@dcloudio/uni-app"

  const { proxy } = getCurrentInstance()
  const user = reactive({
    oldPassword: undefined,
    newPassword: undefined,
    confirmPassword: undefined
  })
  const rules = ref({
    oldPassword: {
      rules: [{
        required: true,
        errorMessage: '旧密码不能为空'
      }]
    },
    newPassword: {
      rules: [{
        required: true,
        errorMessage: '新密码不能为空',
      }, {
        minLength: 6,
        maxLength: 20,
        errorMessage: '长度在 6 到 20 个字符'
      }]
    },
    confirmPassword: {
      rules: [{
        required: true,
        errorMessage: '确认密码不能为空'
      }, {
        validateFunction: (rule, value, data) => user.newPassword === value,
        errorMessage: '两次输入的密码不一致'
      }]
    }
  })

  onReady(() => {
    proxy.$refs.form.setRules(rules.value)
  })

  function submit() {
    proxy.$refs.form.validate().then(res => {
      updateUserPwd(user.oldPassword, user.newPassword).then(response => {
        proxy.$modal.msgSuccess("修改成功")
      })
    })
  }
</script>

<style lang="scss" scoped>
  page {
    background-color: #ffffff;
  }

  .pwd-retrieve-container {
    padding-top: 36rpx;
    padding: 15px;
  }
</style>
