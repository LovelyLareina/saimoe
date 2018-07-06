<template>
  <div class="fy-head">
    <div class="fy-head-wrapper clearfix">
      <div class="fy-head-left">
        <div class="fy-btn"></div>
        <h1 class="fy-title">风影</h1>
      </div>
      <div class="fy-left-btnlist" v-show="showBtnList">
        <ul v-for="(val, idx) in headBtnList" :key="idx">
          <li><a class="fy-cursor-btn">{{val}}</a></li>
        </ul>
      </div>
      <div class="fy-head-right" v-show="showAbout">
        <a class="fy-about-btn fy-cursor-btn" @click="aboutFy">关于风影</a>
      </div>
      <div class="fy-head-right" v-show="showLayout">
        <a class="fy-about-btn fy-cursor-btn" @click="aboutFy">退出</a>
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
    },
    showLayout: {
      type: Boolean,
      default: true
    },
    showBtnList: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      headBtnList: ['首页', '我的主页', '写日记', '设置']
    }
  },
  methods: {
    aboutFy () { // 关于风影
      this.$router.push({path: 'aboutFy', params: {}})
    }
  }
}
</script>

<style scoped lang="less">
  .fy-left-btnlist{
    float: left;
    margin-left: 40px;
    margin-top: 10px;
    ul{
      float: left;
      li{
         float: left;
         font-size: 17px;
         height: 30px;
         line-height: 30px;
         padding: 0 30px;
         border-left: 1px solid white;
        a{
          color: white;
        }
        a:hover{
          font-weight: bold;
        }
       }
    }
  }
  .fy-about-btn{
    color: white;
    font-size: 17px;
    height: 50px;
    line-height: 50px;
  }
  .fy-about-btn:hover{
    font-weight: bold;
  }
  /*.fy-head-right{*/
    /*i{*/
      /*display: block;*/
      /*width: 16px;*/
      /*height: 16px;*/
      /*background: url("../../assets/img/home/layout.png");*/
    /*}*/
  /*}*/
</style>
