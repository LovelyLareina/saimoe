<template>
  <div>
    <fy-head :show-about="false"></fy-head>
    <div class="fy-main">
      <div class="fy-main-left">
        <p>{{isLogin ? '请登录您的账号' : '找回密码'}}</p>
        <div v-show="isLogin" class="fy-register-form" v-for="(val, idx) in dataList" :key="idx">
          <p>{{val}}</p>
          <input type="text">
        </div>
        <div v-show="!isLogin" class="fy-register-form">
          <span>请输入您在风影的注册邮箱</span>
          <input type="text">
        </div>
        <div class="fy-tips" v-show="isLogin">
          <div class="fy-check-left"><input type="checkbox"><span>七天内自动登录</span></div>
         <!--<a class="fy-login-btn fy-setlogin-btn">七天内自动登录</a>-->
          <a class="fy-forget-btn fy-cursor-btn" @click="forgetPsw">忘记密码</a>
        </div>
        <a class="fy-creat-btn">{{isLogin ? '立即登录' : '重设密码'}}</a>
      </div>
      <div class="fy-main-right">
        <p>还没有账号？</p>
        <a class="fy-underline-btn fy-cursor-btn" @click="fyRegister">马上注册>></a>
      </div>
    </div>
  </div>
</template>
<script>
import FyHead from '../common/fyHead.vue'
export default {
  name: 'login',
  components: {FyHead},
  data () {
    return {
      dataList: ['邮箱：', '密码：'],
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
  .fy-main-left{
    p{
      font-size: 20px;
      margin-bottom: 20px;
      color: #e8989a;
    }
    .fy-register-form{
      p{
        font-size: 16px;
        margin-bottom: 10px;
        color: #2c3e50;
      }
      input{
        padding-left: 10px;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
      }
    }
  }
  .fy-tips{
    margin-top: 20px;
    height: 100px;
    width: 100%;
    .fy-check-left{
      float: left;
      margin-top: 30px;
      text-align: center;
      input{
        display: inline-block;
        vertical-align: top;
        margin: 1px 0 0;
        padding: 0;
        width: 18px;
        height: 18px;
      }
      span{
        display: inline-block;
        font-size: 14px;
        margin-left: 5px;
      }
    }
    .fy-forget-btn{
      float: left;
      color: #e8989a;
      font-size: 14px;
      margin-left: 20px;
      margin-top: 30px;
      padding-left: 20px;
      border-left: 1px solid #e8989a;
    }
  }
  .fy-creat-btn{
    display: inline-block;
    margin-top: 15px;
    color: #e8989a;
    text-align: center;
    font-size: 16px;
    border: 1px solid #e8989a;
    border-radius: 5px;
    padding: 8px 25px;
  }
  .fy-creat-btn:hover{
    color: white;
    background-color: #e8989a;
    border-radius: 5px;
  }
</style>
