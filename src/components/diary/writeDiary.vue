<template>
  <div>
    <fy-head :show-about="false" :show-btn-list="true" :show-layout="true"></fy-head>
    <div class="fy-diary-head">
      <span>{{theDate}}</span>
      <span class="fy-week-span">{{theWeek}}</span>
    </div>
    <div class="fy-main">
      <div class="fy-toolbar">
      </div>
      <div class="fy-diary-text">
        <p>{{diaryContent}}</p>
      </div>
    </div>
    <div class="fy-commit clearfix">
      <a class="fy-pink-btn fy-cursor-btn">写完了</a>
    </div>
    <transition name="translate">
      <fy-message :messageShow="messageShow" :sendMessage="sendMessage"></fy-message>
    </transition>
  </div>
</template>
<script>
import FyHead from '../common/fyHead.vue'
import FyMessage from '../common/fyMessage.vue'
import FyEditor from 'wangeditor'
export default {
  name: 'writeDiary',
  components: {FyHead, FyMessage},
  data () {
    return {
      messageShow: false,
      sendMessage: '',
      diaryContent: '' // 日记内容
    }
  },
  computed: {
    theDate () {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      if (month < 10) {
        month = '0' + month
      }
      if (day < 10) {
        day = '0' + day
      }
      let nowDate = year + '年' + month + '月' + day + '日'
      return nowDate
    },
    theWeek () {
      let weekStr = ''
      var week = new Date().getDay()
      if (week === 0) {
        weekStr = '今天是星期日'
      } else if (week === 1) {
        weekStr = '星期一'
      } else if (week === 2) {
        weekStr = '星期二'
      } else if (week === 3) {
        weekStr = '星期三'
      } else if (week === 4) {
        weekStr = '星期四'
      } else if (week === 5) {
        weekStr = '星期五'
      } else if (week === 6) {
        weekStr = '星期六'
      }
      return weekStr
    }
  },
  created () {
  },
  mounted () {
    var editor = new FyEditor('.fy-toolbar', '.fy-diary-text')
    // 自定义菜单配置
    editor.customConfig.menus = [
      'head',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'justify'
    ]
    editor.customConfig.fontNames = [
      '宋体',
      '微软雅黑',
      'Arial',
      'Tahoma',
      'Verdana'
    ]
    editor.create()
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .fy-diary-head{
    width: 80%;
    margin: 30px auto 0;
    color: #808080;
    font-size: 18px;
    .fy-week-span{
      margin-left: 15px;
    }
  }
  .fy-main{
    font-size: 16px;
    margin-top: 20px;
    .fy-toolbar {
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      border-left: 1px solid #ccc;
    }
    .fy-diary-text {
      border: 1px solid #ccc;
      height: 500px;
    }
  }
  .fy-commit{
    width: 80%;
    margin: 30px auto 0;
    .fy-pink-btn{
      float: right;
    }
  }
</style>
