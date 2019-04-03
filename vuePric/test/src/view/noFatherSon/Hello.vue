<template>
  <div class="hello">
    <h1>参数：{{ number }}</h1>
    <button @click="sendParam()">发送</button>
  </div>
</template>
<script>
import bus from './bus'
export default {
  data () {
    return {
      number: 123
    }
  },
  methods: {
    sendParam () {
      bus.$emit('getParam', this.number)
    }
  }
}
</script>
