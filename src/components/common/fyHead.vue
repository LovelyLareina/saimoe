<template>
  <div class="fy-head">
    <div class="fy-head-wrapper clearfix">
      <div class="fy-head-left">
        <div class="fy-btn"></div>
        <h1 class="fy-title">风影</h1>
      </div>
      <div class="fy-head-right" v-show="showAbout">
        <a class="fy-about-btn fy-cursor-btn" @click="aboutFy">关于风影</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showAbout: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    aboutFy () { // 关于风影
      this.$router.push({path: 'aboutFy', params: {}})
    }
  }
}
</script>

<style scoped>
  .fy-about-btn{
    color: #e8989a;
    background-color: white;
    text-align: center;
    font-size: 16px;
    /*height: 40px;*/
    line-height: 40px;
    border-radius: 5px;
    padding: 8px 13px
  }
  .fy-about-btn:hover{
    color: white;
    background-color: #e8989a;
    border: 2px solid white;
    border-radius: 5px;
  }
</style>
