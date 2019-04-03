<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules" label-width="150">
      <el-form-item prop="newpassword" label="密码登录 : ">
        <el-input style="width: 150px" v-model="form.newpassword" placeholder="新登录密码"  type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '' || value === undefined) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      form: {
        newpassword: ''
      },
      rules: {
        newpassword: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

  }
}
</script>
