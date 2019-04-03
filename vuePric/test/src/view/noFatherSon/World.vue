<template>
  <div class="hello">
    <h1>接受参数{{ number }}</h1>
  </div>
</template>
<script>
import bus from './bus'
export default {
  data () {
    return {
      number: 0
    }
  },
  created () {
    bus.$on('getParam', param => {
      this.number = param
    })
  },
  beforeDestroy () {
    bus.$off('getParam')
  }
}
</script>

