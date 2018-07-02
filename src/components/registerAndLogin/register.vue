<template>
  <div>
    <fy-head :show-about="false"></fy-head>
    <div class="fy-main">
      <div class="fy-main-left">
        <div class="fy-register-form" v-for="(val, idx) in dataList" :key="idx">
          <span>{{val}}</span>
          <input type="text">
        </div>
        <a class="fy-creat-btn">创建用户</a>
      </div>
      <div class="fy-main-right">
        <p>已经有账号了？</p>
        <a class="fy-underline-btn fy-cursor-btn" @click="fylogin">立刻登录>></a>
      </div>
    </div>
  </div>
</template>
<script>
import FyHead from '../common/fyHead.vue'
export default {
  name: 'register',
  components: {FyHead},
  data () {
    return {
      dataList: ['邮箱：', '密码：', '确认密码：', '昵称：']
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    fylogin () { // 立即登录
      this.$router.push({path: 'login', params: {}})
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
      }
    }
    .fy-creat-btn{
      display: inline-block;
      margin-top: 15px;
      margin-left: 200px;
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
  }
</style>
