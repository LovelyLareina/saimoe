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
        <p>登录</p>
        <div class="fy-register-form" v-for="(val, idx) in dataList" :key="idx">
          <span>{{val}}</span>
          <input type="text">
        </div>
      </div>
      <div class="fy-main-right">
        <p>还没有账号？</p>
        <a class="fy-about-btn" @click="fylogin">马上注册>></a>
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
      dataList: ['邮箱', '密码']
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    fylogin () { // 立即登录
    }
  }
}
</script>

<style scoped>
  @import "../../assets/css/main.css";
</style>
