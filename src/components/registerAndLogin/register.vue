<template>
  <div>
    <div class="fy-head">
      <div class="fy-head-wrapper clearfix">
        <div class="fy-head-left">
          <div class="fy-btn"></div>
          <h1 class="fy-title">风影</h1>
        </div>
        <div class="fy-head-right">
          <a class="fy-white-btn" @click="aboutFy">关于风影</a>
        </div>
      </div>
    </div>
    <div class="fy-main">
      <div class="fy-main-left">
        <div class="fy-register-form" v-for="(val, idx) in dataList" :key="idx">
          <span>{{val}}：</span>
          <input type="text">
        </div>
        <a class="">创建用户</a>
      </div>
      <div class="fy-main-right">
        <p>已经有账号了？</p>
        <a class="fy-about-btn" @click="fylogin">立刻登录>></a>
      </div>
    </div>
    <div class="fy-end">
      <p>☀你我就像是风的影子，与有趣的故事一起探过无数的桥与路。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      dataList: ['邮箱', '密码', '确认密码', '昵称']
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
  .fy-register-form{
    margin-bottom: 15px;
    span{
      display: inline-block;
      width: 90px;
      text-align: right;
      font-size: 16px;
    }
  }
</style>
