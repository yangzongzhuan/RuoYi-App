<template>
  <view class="container">
    <view class="example">
      <uni-forms ref="form" :model="user" labelWidth="80px">
        <uni-forms-item label="用户昵称" name="nickName">
          <uni-easyinput v-model="user.nickName" placeholder="请输入昵称" />
        </uni-forms-item>
        <uni-forms-item label="手机号码" name="phonenumber">
          <uni-easyinput v-model="user.phonenumber" placeholder="请输入手机号码" />
        </uni-forms-item>
        <uni-forms-item label="邮箱" name="email">
          <uni-easyinput v-model="user.email" placeholder="请输入邮箱" />
        </uni-forms-item>
        <uni-forms-item label="性别" name="sex" required>
          <uni-data-checkbox v-model="user.sex" :localdata="sexs" />
        </uni-forms-item>
      </uni-forms>
      <button type="primary" @click="submit">提交</button>
    </view>
  </view>
</template>

<script setup>
  import { getUserProfile } from "@/api/system/user"
  import { updateUserProfile } from "@/api/system/user"
  import { ref , getCurrentInstance } from "vue"
  import { onReady } from  "@dcloudio/uni-app"

  const { proxy } = getCurrentInstance()
  const user = ref({
    nickName: "",
    phonenumber: "",
    email: "",
    sex: ""
  })
  const sexs = [{
    text: '男',
    value: "0"
  }, {
    text: '女',
    value: "1"
  }]
  const rules = ref({
    nickName: {
      rules: [{
        required: true,
        errorMessage: '用户昵称不能为空'
      }]
    },
    phonenumber: {
      rules: [{
        required: true,
        errorMessage: '手机号码不能为空'
      }, {
        pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
        errorMessage: '请输入正确的手机号码'
      }]
    },
    email: {
      rules: [{
        required: true,
        errorMessage: '邮箱地址不能为空'
      }, {
        format: 'email',
        errorMessage: '请输入正确的邮箱地址'
      }]
    }
  })

  function getUser() {
    getUserProfile().then(response => {
      user.value = response.data
    })
  }

  function submit(ref) {
    proxy.$refs.form.validate().then(res => {
      updateUserProfile(user.value).then(response => {
        proxy.$modal.msgSuccess("修改成功")
      })
    })
  }

  onReady(() => {
    proxy.$refs.form.setRules(rules.value)
  })

  getUser()
</script>

<style lang="scss" scoped>
  page {
    background-color: #ffffff;
  }

  .example {
    padding: 15px;
    background-color: #fff;
  }

  .segmented-control {
    margin-bottom: 15px;
  }

  .button-group {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
  }

  .form-item {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .button {
    display: flex;
    align-items: center;
    height: 35px;
    line-height: 35px;
    margin-left: 10px;
  }
</style>
