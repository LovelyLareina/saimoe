<template>
  <div>
    <fy-head :show-about="false" :show-btn-list="false" :show-layout="false"></fy-head>
    <div class="fy-main">
      <div class="fy-main-left">
        <div class="fy-register-form" v-for="(val, idx) in inputData" :key="idx">
          <span>{{val.name}}</span>
          <input :type="idx === 1 || idx === 2 ? 'password' : 'text'" v-model="userData[idx]" :placeholder="val.tip">
        </div>
        <a class="fy-creat-btn" @click="createdUser">创建用户</a>
      </div>
      <div class="fy-main-right">
        <p>已经有账号了？</p>
        <a class="fy-underline-btn fy-cursor-btn" @click="fylogin">立刻登录>></a>
      </div>
    </div>
    <transition name="translate">
      <fy-message :messageShow="messageShow" :sendMessage="sendMessage"></fy-message>
    </transition>
  </div>
</template>
<script>
import FyHead from '../common/fyHead.vue'
import FyMessage from '../common/fyMessage.vue'
import {register} from '../../bmob.js'
export default {
  name: 'register',
  components: {FyHead, FyMessage},
  data () {
    return {
      inputData: [{name: '邮箱：', tip: '请输入您的邮箱账号'},
        {name: '密码：', tip: '请输入您的密码'},
        {name: '确认密码：', tip: '请确认您的密码'},
        {name: '昵称：', tip: '请输入您的昵称'}],
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
    fylogin () { // 立即登录
      this.$router.push({path: 'login', params: {}})
    },
    createdUser () { // 创建用户
      let data = {
        nickname: this.userData[3], // 昵称
        password: this.userData[1], // 密码
        username: this.userData[0], // 邮箱
        email: this.userData[0] // 邮箱
      }
      if (!this.verificate(this.userData)) { // 用户信息有误
        return
      }
      let self = this
      register(data).then((result) => {
        this.showMessage(`恭喜你，注册成功！`, function () {
          self.isLogin = true
        })
      }, (res) => {
        if (res.code === 202) {
          self.showMessage(`昵称已经存在`)
        } else if (res.code === 203) {
          self.showMessage(`邮箱已经存在`)
        } else {
          self.showMessage(`${res.message}`)
        }
      })
    },
    verificate (data) { // 校验用户信息
      let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
      if (!data[0]) {
        this.showMessage('邮箱不能为空')
        return false
      } else if (!data[1]) {
        this.showMessage('密码不能为空')
        return false
      } else if (!data[2]) {
        this.showMessage('确认密码不能为空')
        return false
      } else if (!data[3]) {
        this.showMessage('昵称不能为空')
        return false
      } else if (data[1] !== data[2]) {
        this.showMessage('两次输入的密码不一样')
        return false
      } else if (data[1].length < 8 || data[2].length < 8) {
        this.showMessage('密码不能少于8位数')
        return false
      } else if (!reg.test(data[0])) {
        this.showMessage('请输入正确的email格式')
        return false
      }
      return true
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
    .fy-register-form{
      margin-bottom: 25px;
      font-size: 16px;
      span{
        display: inline-block;
        width: 90px;
        text-align: right;
      }
      input{
        margin-left: 10px;
        padding-left: 10px;
        width: 300px;
        height: 40px;
        &:focus {
          transition: box-shadow 0.4s ease-in-out 0s;
          box-shadow: 0 0 6px 2px rgba(232, 152, 154, 0.4) inset;
        }
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
    .fy-creat-btn{
      display: inline-block;
      margin-top: 15px;
      margin-left: 200px;
      color: #e8989a;
      text-align: center;
      font-size: 18px;
      border: 1px solid #e8989a;
      border-radius: 5px;
      padding: 8px 25px;
    }
    .fy-creat-btn:hover{
      color: white;
      background-color: #e8989a;
      border-radius: 5px;
    }
  }
</style>
