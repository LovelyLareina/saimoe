<template>
  <div>
    <fy-head :show-about="false"></fy-head>
    <div class="fy-main">
      <div class="fy-main-left">
        <p>{{isLogin ? '请登录您的账号' : '找回密码'}}</p>
        <div v-show="isLogin" class="fy-register-form" v-for="(val, idx) in inputData" :key="idx">
          <p>{{val.name}}</p>
          <input :type="idx === 1 ? 'password' : 'text'" :placeholder="val.tip" v-model="userData[idx]">
        </div>
        <div v-show="!isLogin" class="fy-register-form">
          <p>请输入您在风影的注册邮箱：</p>
          <input type="text">
        </div>
        <div class="fy-tips" v-show="isLogin">
          <div class="fy-check-left"><input type="checkbox" checked="checked"><span>七天内自动登录</span></div>
          <a class="fy-forget-btn fy-cursor-btn" @click="forgetPsw">忘记密码</a>
        </div>
        <a class="fy-creat-btn" @click="loginOrRestpwd">{{isLogin ? '立即登录' : '重设密码'}}</a>
      </div>
      <div class="fy-main-right">
        <p>还没有账号？</p>
        <a class="fy-underline-btn fy-cursor-btn" @click="fyRegister">马上注册>></a>
      </div>
    </div>
    <transition name="translate">
      <fy-message :messageShow="messageShow" :sendMessage="sendMessage"></fy-message>
    </transition>
  </div>
</template>
<script>
import FyHead from '../common/fyHead.vue'
import {login} from '../../bmob.js'
import FyMessage from '../common/fyMessage.vue'
export default {
  name: 'login',
  components: {FyHead, FyMessage},
  data () {
    return {
      inputData: [{name: '邮箱：', tip: '请输入您的邮箱账号'},
        {name: '密码：', tip: '请输入您的密码'}],
      isLogin: true,
      userData: [],
      messageShow: false,
      sendMessage: ''
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
    },
    loginOrRestpwd () { // 登录或者重设密码
      if (this.isLogin) { // 登录
        let data = {
          email: this.userData[0],
          password: this.userData[1]
        }
        let self = this
        login(data).then((result) => {
          if (result.code === '001') {
            let emailFormat = `**${result.email.substring(2)}`
            self.showMessage(`请先验证${emailFormat}邮箱！`)
          } else if (result.code === '000') {
            self.showMessage('登录成功')
            window.localStorage.setItem('avatar', result.avatar)
          }
        }, (error) => {
          if (error.code === 101) {
            self.showMessage(`用户名或密码错误！`)
          }
        })
      } else { // 重设密码
      }
    },
    showMessage (msg, cb) { // 弹出提示信息
      if (this.messageShow) {
        return
      }
      this.sendMessage = msg
      this.messageShow = true
      this.hideMessage(cb)
    },
    hideMessage (cb) { // 关闭提示信息
      setTimeout(() => {
        this.messageShow = false
        cb && cb()
      }, 2500)
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
        &:focus {
          transition: box-shadow 0.4s ease-in-out 0s;
          box-shadow: 0 0 6px 2px rgba(232, 152, 154, 0.4) inset;
        }
        input::-webkit-input-placeholder { /* WebKit browsers */
          font-size:14px;
          color: #666;
        }
        input::-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          font-size:14px;
          color: #666;
        }
        input::-moz-placeholder { /* Mozilla Firefox 19+ */
          font-size:14px;
          color: #666;
        }
        input::-ms-input-placeholder { /* Internet Explorer 10+ */
          font-size:14px;
          color: #999;
        }
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
    .fy-forget-btn:hover{
      font-weight: bold;
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
