<template>
  <div>
    <fy-head :show-about="false" :show-btn-list="true" :show-layout="true"></fy-head>
    <div class="fy-main">
      <div class="fy-main-left">
      </div>
      <div class="fy-main-right">
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
export default {
  name: 'loginHome',
  components: {FyHead, FyMessage},
  data () {
    return {
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
