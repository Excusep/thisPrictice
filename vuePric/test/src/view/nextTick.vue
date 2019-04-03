<template>
  <div class="app">
    <div ref="msgDiv">{{msg}}</div>
    <div v-if="msg1">第一个: {{msg1}}</div>
    <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
    <div v-if="msg3">第三个: {{msg3}}</div>
    <button @click="changeMsg">
      Change the Message
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '1',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    changeMsg() {
      this.msg = "2"
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    }
  }
}
</script>
