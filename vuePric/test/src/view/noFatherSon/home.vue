<template>
  <div class="home">
    <hello></hello>
    <world></world>
  </div>
</template>

<script>
import Hello from './Hello'
import World from './World'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    Hello,
    World
  }
}
</script>
