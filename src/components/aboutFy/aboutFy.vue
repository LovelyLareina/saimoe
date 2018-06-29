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
        <div class="fy-about-div">
          <p class="fy-main-h1">风影是什么？</p>
          <p>风影是一个注重隐私、简洁轻快的日记本。</p>
          <p>你是不是和我们一样，博客、微博、社交网络注册了一堆，却苦于没有一个能说心里话的地方？你是不是也经常被一些网站纷繁复杂的界面和功能弄的晕头转向？风影是力求营造一个属于你的私人王国，在这里你可以真实的记录自己每一次生活感触。</p>
        </div>
        <div class="fy-about-div">
          <p class="fy-main-h1">风影的隐私规则？</p>
          <p>在风影，你可以根据自己的喜好选择日记的受众。如果你不希望其他人看到你的日记，请在注册时或者"设置">"隐私"中选择"只有我自己"可见，这样其他用户就不能看到你的日记，你也不会出现在用户浏览页。同时，风影屏蔽了所有的搜索引擎爬虫，最大限度的维护你在互联网的隐私。</p>
        </div>
        <div class="fy-about-div">
          <p class="fy-main-h1">为什么我的主页只能看到最近一天的日记？</p>
          <p>我们认为每天都是一个新的开始，过去或喜或悲，都已成回忆。另外，你可以在登录以后点击"首页"看到你写过的所有日记。</p>
        </div>
        <div class="fy-about-div">
          <p class="fy-main-h1">风影能不能修改、删除日记?</p>
          <p>风影不支持修改或者删除日记，我们认为第一次的记录往往是最真实可靠。</p>
        </div>
        <div class="fy-about-div">
          <p class="fy-main-h1">风影能不能发图片、评论等等？</p>
          <p>风影崇尚简单和减法，我们坚信你最终也会从这个理念受益。所以在你急切的希望风影支持某个功能时，不妨先静下心来想一想：这个功能真的这么重要吗？如果答案是肯定的，请在风影的豆瓣小组发帖告诉我们。</p>
        </div>
        <div class="fy-about-div">
          <p class="fy-main-h1">开发者信息 : </p>
          <p>昵称:&ensp; &ensp; 小鹿</p>
          <p>星座:&ensp; &ensp; 天蝎座</p>
          <p>邮箱:&ensp; &ensp; 250366944@qq.com</p>
        </div>
      </div>
      <div class="fy-main-right">
        <a class="fy-about-btn" @click="gotoHome">返回首页>></a>
      </div>
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
    gotoHome () { // 返回首页
      this.$router.back()
    }
  }
}
</script>
<style scoped>
  @import "../../assets/css/main.css";
  .fy-main .fy-main-left{
    width: 65%;
    padding-right: 30px;
  }
  .fy-main p{
    font-size: 15px;
    text-align: left;
    word-break: break-word;
    line-height: 30px;
  }
  .fy-main .fy-main-left .fy-main-h1{
    color: #e8989a;
    font-size: 18px;
    text-align: left;
    font-weight: inherit;
  }
  .fy-about-div{
    margin-bottom: 30px;
  }
  .fy-about-btn{
    float: right;
    margin-top: 10px;
    margin-right: 20px;
    font-size: 16px;
    color: #e8989a;
    text-decoration: underline;
  }
</style>
