<template>
  <div>
    <fy-head :show-about="false" :show-btn-list="true" :show-layout="true"></fy-head>
    <div class="fy-main">
      <!--<div class="fy-editor">-->
        <!--<p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>-->
      <!--</div>-->
      <div id="div1" class="toolbar">
      </div>
      <div id="div2" class="text">
        <p>{{diaryContent}}</p>
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
import FyEditor from 'wangeditor'
export default {
  name: 'writeDiary',
  components: {FyHead, FyMessage},
  data () {
    return {
      messageShow: false,
      sendMessage: '',
      diaryContent: ''
    }
  },
  created () {
  },
  mounted () {
    console.log(FyEditor)
    var editor = new FyEditor('#div1', '#div2')
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
  .fy-main{
    font-size: 16px;

  }
  .toolbar {
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  .text {
    border: 1px solid #ccc;
    height: 500px;
  }
</style>
