<template>
  <div>
    <div class="fy-head">
      <div class="fy-head-left">
        <div class="fy-btn"></div>
        <p class="fy-title">风影</p>
      </div>
      <div class="fy-head-right">
        <a class="fy-about fy-white-btn" @click="aboutFy">关于风影</a>
      </div>
    </div>
    <div class="fy-main">
      <div class="fy-main-left">
        <p class="fy-main-jieshao">风影是一个简单、私密的日记本。</p>
        <p class="fy-main-art1"><span class="fy-main-tit1">私密</span><span>：完全私密的个人空间，在这里你可以安心的记录最真实的自己。</span></p>
        <p class="fy-main-art1 art2"><span class="fy-main-tit1">简单</span><span>：去繁就简，专注于提供简洁、纯粹的日记功能。</span></p>
      </div>
      <div class="fy-main-right">
        <a class="fy-main-zhuce fy-pink-btn" @click="register">立即注册</a>
        <p>or</p>
        <a class="fy-main-denglu fy-pink-btn">登录</a>
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
    <div class="fy-end">
      <p>☀你我就像是风的影子，与有趣的故事一起探过无数的桥与路。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    aboutFy () { // 关于风影
      this.$router.push({path: 'aboutFy', params: {}})
    },
    register () { // 立即注册
      this.$router.push({path: 'register', params: {}})
    }
  }
}
</script>
<style scoped>
  @import "../../assets/css/main.css";
</style>
