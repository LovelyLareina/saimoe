<template>
  <div>
    <div class="fy-head">
      <div class="fy-head-left">
        <div class="fy-btn"></div>
        <p class="fy-title">风影</p>
      </div>
    </div>
    <div class="fy-main">
      <div class="fy-main-left">
        <p>{{isLogin ? '登录' : '找回密码'}}</p>
        <div v-show="isLogin" class="fy-register-form" v-for="(val, idx) in dataList" :key="idx">
          <span>{{val}}</span>
          <input type="text">
        </div>
        <div v-show="!isLogin" class="fy-register-form">
          <span>请输入您在风影的注册邮箱</span>
          <input type="text">
        </div>
        <div class="fy-tips" v-show="isLogin">
          <a class="fy-login-btn fy-setlogin-btn">七天内自动登录</a>
          <a class="fy-login-btn fy-forget-btn" @click="forgetPsw">忘记密码</a>
        </div>
        <a class="fy-login-btn fy-setlogin-btn">{{isLogin ? '登录' : '重设密码'}}</a>
      </div>
      <div class="fy-main-right">
        <p>还没有账号？</p>
        <a class="fy-about-btn" @click="fyRegister">马上注册>></a>
      </div>
    </div>
    <div class="fy-end">
      <p>☀你我就像是风的影子，与有趣的故事一起探过无数的桥与路。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      dataList: ['邮箱', '密码'],
      isLogin: true
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    fyRegister () { // 立即注册
      this.$router.push({path: 'register', params: {}})
    },
    forgetPsw () { // 忘记密码
      this.isLogin = false
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/css/main.css";
  .fy-tips{
    margin-top: 20px;
    background-color: pink;
    height: 100px;
    width: 100%;
  }
  .fy-login-btn{
    float: left;
    margin-left: 20px;
    margin-top: 30px;
  }
  .fy-setlogin-btn{
  }
  .fy-forget-btn{
    padding-left: 20px;
    border-left: 1px solid #e8989a;
  }
</style>
