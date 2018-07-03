<template>
  <div>
    <fy-head :show-about="true"></fy-head>
    <div class="fy-main">
      <div class="fy-main-left">
        <h2>风影是一个简单、私密的日记本。</h2>
        <p class="fy-main-art1"><span class="fy-main-tit1">私密</span><span>：完全私密的个人空间，在这里你可以安心的记录最真实的自己。</span></p>
        <p class="fy-main-art1 art2"><span class="fy-main-tit1">简单</span><span>：去繁就简，专注于提供简洁、纯粹的日记功能。</span></p>
      </div>
      <div class="fy-main-right">
        <a class="fy-main-zhuce fy-pink-btn fy-cursor-btn" @click="register">立即注册</a>
        <p>or</p>
        <a class="fy-main-denglu fy-pink-btn fy-cursor-btn" @click="login">登录</a>
      </div>
    </div>
    <div class="fy-foot">
      <ul>
        <li>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</li>
        <li>222222222222222222222211111111111111111111122221111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</li>
        <li>333333333333333333333331111111111111111111113333111111111111111111111333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333</li>
        <li>444444444444444444444444111111111111111111111444111111111111111111111444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444</li>
        <li>555555555555555555555555511111111111111111111155111111111111111111111555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555</li>
      </ul>
    </div>
  </div>
</template>
<script>
import FyHead from '../common/fyHead.vue'
export default {
  name: 'Home',
  components: {FyHead},
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    register () { // 立即注册
      this.$router.push({path: 'register', params: {}})
    },
    login () { // 登录
      this.$router.push({path: 'login', params: {}})
    }
  }
}
</script>
<style scoped>
</style>
